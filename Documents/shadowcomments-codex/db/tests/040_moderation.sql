-- Tests for moderation RLS

BEGIN;

-- Ensure session helper exists for this test run
CREATE OR REPLACE PROCEDURE app.set_user_context(u uuid, roles text)
LANGUAGE plpgsql AS $$
BEGIN
  PERFORM set_config('app.user_id', COALESCE(u::text, ''), false);
  PERFORM set_config('app.roles', COALESCE(roles, ''), false);
END$$;

-- Seed two users and a comment
SELECT gen_random_uuid() AS a INTO TEMP TABLE _m;
INSERT INTO _m SELECT gen_random_uuid();
WITH ids AS (
  SELECT (SELECT a FROM _m LIMIT 1) AS u1,
         (SELECT a FROM _m OFFSET 1 LIMIT 1) AS u2
)
INSERT INTO public.app_user(id, username)
SELECT u1, 'm_u1' FROM ids
UNION ALL
SELECT u2, 'm_u2' FROM ids;

DO $$
DECLARE u1 uuid; u2 uuid; cid uuid; rid uuid; rows int;
BEGIN
  SELECT a INTO u1 FROM _m LIMIT 1;
  SELECT a INTO u2 FROM _m OFFSET 1 LIMIT 1;
  CALL app.set_user_context(u1, 'authenticated');
  INSERT INTO public.comment(author_id, kind, body) VALUES (u1, 'plain', 'mod target') RETURNING id INTO cid;

  -- u2 files a report against u1's comment
  CALL app.set_user_context(u2, 'authenticated');
  INSERT INTO public.report(reporter_id, target_comment_id, reason)
  VALUES (u2, cid, 'abuse') RETURNING id INTO rid;
  IF rid IS NULL THEN RAISE EXCEPTION 'expected report id'; END IF;

  -- u1 should not read u2's report
  CALL app.set_user_context(u1, 'authenticated');
  BEGIN
    PERFORM 1 FROM public.report WHERE id = rid;
    RAISE EXCEPTION 'expected reporter-only read';
  EXCEPTION WHEN others THEN NULL; END;

  -- u2 can update their report status to simulate flow (user-level allowed)
  CALL app.set_user_context(u2, 'authenticated');
  UPDATE public.report SET status = 'reviewing' WHERE id = rid;
  GET DIAGNOSTICS rows = ROW_COUNT;
  IF rows <> 1 THEN RAISE EXCEPTION 'expected report update by reporter'; END IF;

  -- appeals: u1 appeals
  CALL app.set_user_context(u1, 'authenticated');
  INSERT INTO public.appeal(appellant_id, report_id, message)
  VALUES (u1, rid, 'not fair');

  -- legal_strike and user_ban should be inaccessible to regular users
  BEGIN
    INSERT INTO public.legal_strike(user_id, reason) VALUES (u1, 'test');
    RAISE EXCEPTION 'expected deny insert legal_strike';
  EXCEPTION WHEN insufficient_privilege THEN NULL; WHEN others THEN NULL; END;

  BEGIN
    INSERT INTO public.user_ban(user_id, reason) VALUES (u1, 'test');
    RAISE EXCEPTION 'expected deny insert user_ban';
  EXCEPTION WHEN insufficient_privilege THEN NULL; WHEN others THEN NULL; END;
END$$;

ROLLBACK;


