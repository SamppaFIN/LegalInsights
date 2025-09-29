-- Tests for notifications and activity RLS/behavior

BEGIN;

-- Ensure session helper exists for this test run
CREATE OR REPLACE PROCEDURE app.set_user_context(u uuid, roles text)
LANGUAGE plpgsql AS $$
BEGIN
  PERFORM set_config('app.user_id', COALESCE(u::text, ''), false);
  PERFORM set_config('app.roles', COALESCE(roles, ''), false);
END$$;

-- Seed two users
SELECT gen_random_uuid() AS a INTO TEMP TABLE _n;
INSERT INTO _n SELECT gen_random_uuid();
WITH ids AS (
  SELECT (SELECT a FROM _n LIMIT 1) AS u1,
         (SELECT a FROM _n OFFSET 1 LIMIT 1) AS u2
)
INSERT INTO public.app_user(id, username)
SELECT u1, 'n_u1' FROM ids
UNION ALL
SELECT u2, 'n_u2' FROM ids;

DO $$
DECLARE u1 uuid; u2 uuid; nid uuid; rows int;
BEGIN
  SELECT a INTO u1 FROM _n LIMIT 1;
  SELECT a INTO u2 FROM _n OFFSET 1 LIMIT 1;

  -- create a notification for u1
  CALL app.set_user_context(u1, 'authenticated');
  INSERT INTO public.notification(user_id, kind, payload)
  VALUES (u1, 'mention', jsonb_build_object('by','n_u2')) RETURNING id INTO nid;
  IF nid IS NULL THEN RAISE EXCEPTION 'expected notification id'; END IF;

  -- u2 cannot see u1's notification
  CALL app.set_user_context(u2, 'authenticated');
  BEGIN
    PERFORM 1 FROM public.notification WHERE id = nid;
    RAISE EXCEPTION 'expected owner-only notification access';
  EXCEPTION WHEN others THEN NULL; END;

  -- u1 can mark seen
  CALL app.set_user_context(u1, 'authenticated');
  UPDATE public.notification SET is_seen = true WHERE id = nid;
  GET DIAGNOSTICS rows = ROW_COUNT;
  IF rows <> 1 THEN RAISE EXCEPTION 'expected to mark notification seen'; END IF;

  -- activity owner-only
  INSERT INTO public.activity(user_id, verb, object_type, object_id)
  VALUES (u1, 'commented', 'comment', gen_random_uuid());
  CALL app.set_user_context(u2, 'authenticated');
  BEGIN
    PERFORM 1 FROM public.activity WHERE user_id = u1;
    RAISE EXCEPTION 'expected owner-only activity access';
  EXCEPTION WHEN others THEN NULL; END;
END$$;

ROLLBACK;


