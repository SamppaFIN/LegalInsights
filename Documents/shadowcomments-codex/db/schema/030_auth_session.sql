-- Minimal auth/session scaffolding (secrets not stored here)

BEGIN;

CREATE TABLE IF NOT EXISTS public.auth_identity (
  user_id        uuid PRIMARY KEY REFERENCES public.app_user(id) ON DELETE CASCADE,
  provider       text NOT NULL CHECK (provider IN ('email','oauth','dev')),
  provider_uid   text NOT NULL, -- external subject identifier (hashed upstream)
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now(),
  UNIQUE (provider, provider_uid)
);

CREATE TABLE IF NOT EXISTS public.user_session (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        uuid NOT NULL REFERENCES public.app_user(id) ON DELETE CASCADE,
  issued_at      timestamptz NOT NULL DEFAULT now(),
  expires_at     timestamptz NOT NULL,
  user_agent     text,
  ip_hash        text, -- store a hash, not raw IP
  revoked_at     timestamptz
);

CREATE INDEX IF NOT EXISTS idx_user_session_user ON public.user_session(user_id);
CREATE INDEX IF NOT EXISTS idx_user_session_expires ON public.user_session(expires_at);

-- RLS
ALTER TABLE public.auth_identity ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_session ENABLE ROW LEVEL SECURITY;

-- Policies
DROP POLICY IF EXISTS auth_identity_self ON public.auth_identity;
CREATE POLICY auth_identity_self ON public.auth_identity
  FOR ALL USING (user_id = app.current_user_id())
  WITH CHECK (user_id = app.current_user_id());

DROP POLICY IF EXISTS user_session_self ON public.user_session;
CREATE POLICY user_session_self ON public.user_session
  FOR ALL USING (user_id = app.current_user_id())
  WITH CHECK (user_id = app.current_user_id());

COMMIT;


