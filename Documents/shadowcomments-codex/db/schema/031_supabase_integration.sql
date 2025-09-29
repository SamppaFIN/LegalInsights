-- Supabase integration: auto-provision app_user on auth.users insert when available

BEGIN;

-- Helper to ensure app_user and user_profile exist for a given user id and username
CREATE OR REPLACE FUNCTION app.ensure_app_identity(p_user_id uuid, p_username text)
RETURNS void AS $$
BEGIN
  INSERT INTO public.app_user(id, username)
  VALUES (p_user_id, p_username)
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_profile(user_id, display_name, visibility)
  VALUES (p_user_id, NULL, 'public')
  ON CONFLICT (user_id) DO NOTHING;
END$$ LANGUAGE plpgsql;

-- Try to attach a trigger to auth.users if present (Supabase)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.tables
    WHERE table_schema = 'auth' AND table_name = 'users'
  ) THEN
    CREATE OR REPLACE FUNCTION app.on_auth_user_created()
    RETURNS trigger AS $func$
    DECLARE v_username text;
    BEGIN
      -- derive a default username from raw_user_meta_data.name or email local part when available
      BEGIN
        v_username := COALESCE(
          (NEW.raw_user_meta_data ->> 'username'),
          split_part(NEW.email, '@', 1),
          encode(gen_random_bytes(6), 'hex')
        );
      EXCEPTION WHEN others THEN
        v_username := encode(gen_random_bytes(6), 'hex');
      END;
      PERFORM app.ensure_app_identity(NEW.id, v_username);
      RETURN NEW;
    END
    $func$ LANGUAGE plpgsql;

    -- Create trigger if not exists
    IF NOT EXISTS (
      SELECT 1 FROM pg_trigger WHERE tgname = 'tg_on_auth_user_created'
    ) THEN
      CREATE TRIGGER tg_on_auth_user_created
      AFTER INSERT ON auth.users
      FOR EACH ROW EXECUTE FUNCTION app.on_auth_user_created();
    END IF;
  END IF;
END$$;

-- Helper for environments without trigger: ensure current user exists using JWT claims
CREATE OR REPLACE FUNCTION app.ensure_current_user()
RETURNS void AS $$
DECLARE v_sub uuid; v_name text; v_username text;
BEGIN
  v_sub := NULLIF(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub';
  IF v_sub IS NULL THEN RETURN; END IF;
  v_name := NULLIF(current_setting('request.jwt.claims', true), '')::jsonb ->> 'name';
  v_username := COALESCE(v_name, encode(gen_random_bytes(6), 'hex'));
  PERFORM app.ensure_app_identity(v_sub::uuid, v_username);
END$$ LANGUAGE plpgsql;

COMMIT;


