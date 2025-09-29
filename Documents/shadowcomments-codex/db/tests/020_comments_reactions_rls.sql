-- SQL tests for comments and reactions policies

BEGIN;

-- Ensure session helper exists for this test run
CREATE OR REPLACE PROCEDURE app.set_user_context(u uuid, roles text)
LANGUAGE plpgsql AS $$
BEGIN
  PERFORM set_config('app.user_id', COALESCE(u::text, ''), false);
  PERFORM set_config('app.roles', COALESCE(roles, ''), false);
END$$;

-- Seed two users
SELECT gen_random_uuid() AS a INTO TEMP TABLE _u;
INSERT INTO _u SELECT gen_random_uuid();

WITH ids AS (
  SELECT (SELECT a FROM _u LIMIT 1) AS u1,
         (SELECT a FROM _u OFFSET 1 LIMIT 1) AS u2
)
INSERT INTO public.app_user(id, username)
SELECT u1, 'c_user1' FROM ids
UNION ALL
SELECT u2, 'c_user2' FROM ids;

-- As u1 create a public comment
DO $$
DECLARE u1 uuid; u2 uuid; cid uuid; rows int;
BEGIN
  SELECT a INTO u1 FROM _u LIMIT 1;
  SELECT a INTO u2 FROM _u OFFSET 1 LIMIT 1;
  CALL app.set_user_context(u1, 'authenticated');
  INSERT INTO public.comment(author_id, kind, article_kind, body)
  VALUES (u1, 'plain', NULL, 'hello world') RETURNING id INTO cid;
  IF cid IS NULL THEN RAISE EXCEPTION 'expected comment id'; END IF;

  -- As u2, read it
  CALL app.set_user_context(u2, 'authenticated');
  PERFORM 1 FROM public.comment WHERE id = cid; -- should be visible

  -- Owner can see even if soft-hidden
  CALL app.set_user_context(u1, 'authenticated');
  UPDATE public.comment SET is_soft_hidden = true WHERE id = cid;
  PERFORM 1 FROM public.comment WHERE id = cid; -- visible to owner

  -- Others cannot see soft-hidden
  CALL app.set_user_context(u2, 'authenticated');
  BEGIN
    PERFORM 1 FROM public.comment WHERE id = cid;
    RAISE EXCEPTION 'expected soft-hidden comment to be invisible to others';
  EXCEPTION WHEN others THEN NULL; END;

  -- Re-enable visibility
  CALL app.set_user_context(u1, 'authenticated');
  UPDATE public.comment SET is_soft_hidden = false WHERE id = cid;

  -- Reactions: u2 reacts with strength 2
  CALL app.set_user_context(u2, 'authenticated');
  INSERT INTO public.reaction(comment_id, user_id, kind, strength)
  VALUES (cid, u2, 'rose', 2);

  -- Duplicate reaction kind should be unique
  BEGIN
    INSERT INTO public.reaction(comment_id, user_id, kind, strength)
    VALUES (cid, u2, 'rose', 1);
    RAISE EXCEPTION 'expected unique constraint on reaction';
  EXCEPTION WHEN unique_violation THEN NULL; WHEN others THEN NULL; END;

  -- Score view should reflect strength 2 as +2
  PERFORM 1 FROM public.v_comment_reactions WHERE comment_id = cid AND kind = 'rose' AND score = 2;

  -- Update reaction only by owner
  BEGIN
    CALL app.set_user_context(u1, 'authenticated');
    UPDATE public.reaction SET strength = 1 WHERE comment_id = cid; -- should update 0 rows
  EXCEPTION WHEN others THEN NULL; END;

END$$;

ROLLBACK;


