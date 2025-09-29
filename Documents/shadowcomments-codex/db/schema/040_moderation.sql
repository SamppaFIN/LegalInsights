-- Moderation schema: reports, appeals, strikes, bans

BEGIN;

CREATE TYPE public.report_status AS ENUM ('open','reviewing','resolved','rejected');

CREATE TABLE IF NOT EXISTS public.report (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id   uuid NOT NULL REFERENCES public.app_user(id) ON DELETE CASCADE,
  target_comment_id uuid REFERENCES public.comment(id) ON DELETE CASCADE,
  target_user_id uuid REFERENCES public.app_user(id) ON DELETE CASCADE,
  reason        text NOT NULL,
  status        public.report_status NOT NULL DEFAULT 'open',
  created_at    timestamptz NOT NULL DEFAULT now(),
  resolved_at   timestamptz
);

CREATE TABLE IF NOT EXISTS public.appeal (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  appellant_id  uuid NOT NULL REFERENCES public.app_user(id) ON DELETE CASCADE,
  report_id     uuid NOT NULL REFERENCES public.report(id) ON DELETE CASCADE,
  message       text NOT NULL,
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.legal_strike (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid NOT NULL REFERENCES public.app_user(id) ON DELETE CASCADE,
  reason        text NOT NULL,
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.user_ban (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid NOT NULL REFERENCES public.app_user(id) ON DELETE CASCADE,
  reason        text NOT NULL,
  starts_at     timestamptz NOT NULL DEFAULT now(),
  ends_at       timestamptz,
  created_at    timestamptz NOT NULL DEFAULT now()
);

-- RLS enablement
ALTER TABLE public.report ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appeal ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.legal_strike ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_ban ENABLE ROW LEVEL SECURITY;

-- Policies
-- report: reporter can CRUD own; anonymous cannot read others; service/admin handled at app layer
DROP POLICY IF EXISTS report_self ON public.report;
CREATE POLICY report_self ON public.report
  FOR ALL USING (reporter_id = app.current_user_id())
  WITH CHECK (reporter_id = app.current_user_id());

-- appeal: appellant can CRUD own
DROP POLICY IF EXISTS appeal_self ON public.appeal;
CREATE POLICY appeal_self ON public.appeal
  FOR ALL USING (appellant_id = app.current_user_id())
  WITH CHECK (appellant_id = app.current_user_id());

-- legal_strike and user_ban are admin-managed; default deny all
-- (service/admin roles to be handled by elevated connection/definer functions later)

COMMIT;


