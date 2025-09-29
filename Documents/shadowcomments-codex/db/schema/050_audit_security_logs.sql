-- Audit and security logs (hashed, retention described in docs)

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.audit_log (
  id           bigserial PRIMARY KEY,
  user_id      uuid,
  action       text NOT NULL,
  entity       text,
  entity_id    uuid,
  metadata     jsonb,
  created_at   timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.security_log (
  id           bigserial PRIMARY KEY,
  level        text NOT NULL CHECK (level IN ('info','warn','error','severe')),
  event        text NOT NULL,
  actor_hash   text, -- hash of actor, not raw
  details      jsonb,
  created_at   timestamptz NOT NULL DEFAULT now()
);

-- RLS: logs are not user-readable by default
ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.security_log ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.audit_log FROM PUBLIC;
REVOKE ALL ON public.security_log FROM PUBLIC;

-- No permissive policies; access via definer functions or admin connection only

COMMIT;


