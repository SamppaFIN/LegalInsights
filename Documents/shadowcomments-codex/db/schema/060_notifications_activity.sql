-- Notifications and activity tables

BEGIN;

CREATE TYPE public.notification_kind AS ENUM ('mention','reaction','follow','system');

CREATE TABLE IF NOT EXISTS public.notification (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid NOT NULL REFERENCES public.app_user(id) ON DELETE CASCADE,
  kind          public.notification_kind NOT NULL,
  payload       jsonb NOT NULL,
  is_seen       boolean NOT NULL DEFAULT false,
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.activity (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid NOT NULL REFERENCES public.app_user(id) ON DELETE CASCADE,
  verb          text NOT NULL,
  object_type   text NOT NULL,
  object_id     uuid,
  created_at    timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.notification ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS notification_self ON public.notification;
CREATE POLICY notification_self ON public.notification
  FOR ALL USING (user_id = app.current_user_id())
  WITH CHECK (user_id = app.current_user_id());

DROP POLICY IF EXISTS activity_self ON public.activity;
CREATE POLICY activity_self ON public.activity
  FOR ALL USING (user_id = app.current_user_id())
  WITH CHECK (user_id = app.current_user_id());

COMMIT;


