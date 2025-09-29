-- Users and Profiles with strict RLS and privacy guarantees

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Users table: minimal identity; auth secrets are NOT stored here
CREATE TABLE IF NOT EXISTS public.app_user (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username      text UNIQUE NOT NULL CHECK (length(username) BETWEEN 3 AND 32),
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now(),
  -- Privacy-critical fields are excluded intentionally (no email/password)
  -- External auth provider should map to this id
  CONSTRAINT username_slug CHECK (username ~ '^[a-z0-9_]+$')
);

CREATE TABLE IF NOT EXISTS public.user_profile (
  user_id       uuid PRIMARY KEY REFERENCES public.app_user(id) ON DELETE CASCADE,
  display_name  text,
  bio           text,
  avatar_url    text,
  visibility    text NOT NULL DEFAULT 'public' CHECK (visibility IN ('public','followers','private')),
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

-- Update triggers
CREATE OR REPLACE FUNCTION app.touch_updated_at() RETURNS trigger AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END$$ LANGUAGE plpgsql;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'tg_touch_app_user_updated_at'
  ) THEN
    CREATE TRIGGER tg_touch_app_user_updated_at
    BEFORE UPDATE ON public.app_user
    FOR EACH ROW EXECUTE FUNCTION app.touch_updated_at();
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'tg_touch_user_profile_updated_at'
  ) THEN
    CREATE TRIGGER tg_touch_user_profile_updated_at
    BEFORE UPDATE ON public.user_profile
    FOR EACH ROW EXECUTE FUNCTION app.touch_updated_at();
  END IF;
END$$;

-- Session context helpers (no vendor-specific deps)
-- Supabase-compatible: prefer auth.uid() if available, else fall back to session setting
CREATE OR REPLACE FUNCTION app.try_auth_uid() RETURNS uuid AS $$
DECLARE v uuid;
BEGIN
  BEGIN
    EXECUTE 'SELECT auth.uid()' INTO v;
    RETURN v;
  EXCEPTION WHEN undefined_function OR invalid_schema_name OR undefined_table THEN
    RETURN NULL;
  END;
END$$ LANGUAGE plpgsql STABLE;

CREATE OR REPLACE FUNCTION app.current_user_id() RETURNS uuid AS $$
  SELECT COALESCE(
    app.try_auth_uid(),
    (NULLIF(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')::uuid,
    NULLIF(current_setting('app.user_id', true), '')::uuid
  );
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION app.has_role(role_name text) RETURNS boolean AS $$
  SELECT position(role_name in current_setting('app.roles', true)) > 0;
$$ LANGUAGE sql STABLE;

-- RLS enablement
ALTER TABLE public.app_user ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_profile ENABLE ROW LEVEL SECURITY;

-- Policies
-- app_user: self can read/update own row; all can read username for mentions
DROP POLICY IF EXISTS app_user_read_public ON public.app_user;
CREATE POLICY app_user_read_public ON public.app_user
  FOR SELECT USING (true);

DROP POLICY IF EXISTS app_user_update_self ON public.app_user;
CREATE POLICY app_user_update_self ON public.app_user
  FOR UPDATE USING (id = app.current_user_id())
  WITH CHECK (id = app.current_user_id());

DROP POLICY IF EXISTS app_user_insert_self ON public.app_user;
CREATE POLICY app_user_insert_self ON public.app_user
  FOR INSERT WITH CHECK (id = app.current_user_id());

-- user_profile: respect visibility + self access
DROP POLICY IF EXISTS user_profile_select_visibility ON public.user_profile;
CREATE POLICY user_profile_select_visibility ON public.user_profile
  FOR SELECT USING (
    visibility = 'public' OR user_id = app.current_user_id()
  );

DROP POLICY IF EXISTS user_profile_update_self ON public.user_profile;
CREATE POLICY user_profile_update_self ON public.user_profile
  FOR UPDATE USING (user_id = app.current_user_id())
  WITH CHECK (user_id = app.current_user_id());

DROP POLICY IF EXISTS user_profile_insert_self ON public.user_profile;
CREATE POLICY user_profile_insert_self ON public.user_profile
  FOR INSERT WITH CHECK (user_id = app.current_user_id());

-- Public view that never exposes sensitive columns (none exist here by design)
CREATE OR REPLACE VIEW public.v_user_public AS
SELECT u.id,
       u.username,
       p.display_name,
       CASE WHEN p.visibility = 'public' THEN p.avatar_url ELSE NULL END AS avatar_url
FROM public.app_user u
LEFT JOIN public.user_profile p ON p.user_id = u.id;

COMMIT;


