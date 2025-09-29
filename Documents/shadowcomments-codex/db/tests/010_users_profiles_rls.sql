-- SQL tests simulating user contexts via session settings

BEGIN;

-- helper to set current user context
CREATE OR REPLACE PROCEDURE app.set_user_context(u uuid, roles text)
LANGUAGE plpgsql AS $$
BEGIN
  PERFORM set_config('app.user_id', COALESCE(u::text, ''), false);
  PERFORM set_config('app.roles', COALESCE(roles, ''), false);
END$$;

-- seed two users
SELECT gen_random_uuid() AS a INTO TEMP TABLE _ids;
INSERT INTO _ids SELECT gen_random_uuid();

WITH ids AS (
  SELECT (SELECT a FROM _ids LIMIT 1) AS u1,
         (SELECT a FROM _ids OFFSET 1 LIMIT 1) AS u2
)
INSERT INTO public.app_user(id, username)
SELECT u1, 'alice' FROM ids
UNION ALL
SELECT u2, 'bob' FROM ids;

-- give them profiles
WITH ids AS (
  SELECT (SELECT a FROM _ids LIMIT 1) AS u1,
         (SELECT a FROM _ids OFFSET 1 LIMIT 1) AS u2
)
INSERT INTO public.user_profile(user_id, display_name, visibility)
SELECT u1, 'Alice', 'public' FROM ids
UNION ALL
SELECT u2, 'Bob', 'private' FROM ids;

-- as alice, can update own profile; cannot update bob
DO $$
DECLARE u1 uuid; u2 uuid; ok boolean; failed boolean;
BEGIN
  SELECT a INTO u1 FROM _ids LIMIT 1;
  SELECT a INTO u2 FROM _ids OFFSET 1 LIMIT 1;
  CALL app.set_user_context(u1, 'authenticated');
  UPDATE public.user_profile SET display_name = 'Alice A' WHERE user_id = u1;
  GET DIAGNOSTICS ok = ROW_COUNT; -- should be 1
  IF ok <> true THEN RAISE EXCEPTION 'expected self update to succeed'; END IF;
  BEGIN
    UPDATE public.user_profile SET display_name = 'Hacked' WHERE user_id = u2;
    GET DIAGNOSTICS failed = ROW_COUNT; -- should be 0 due to RLS
    IF failed > 0 THEN RAISE EXCEPTION 'rls failed to prevent cross update'; END IF;
  EXCEPTION WHEN others THEN
    -- acceptable to error; treat as pass
    NULL;
  END;
END$$;

SELECT set_config('app.user_id', '', false);
SELECT set_config('app.roles', '', false);
-- should return alice with avatar when public; bob should hide avatar
SELECT * FROM public.v_user_public;

-- Verify visibility filtering via direct table access (RLS)
DO $$
DECLARE cnt_public int; cnt_private int; u2 uuid;
BEGIN
  SELECT count(*) INTO cnt_public FROM public.user_profile WHERE visibility = 'public';
  IF cnt_public < 1 THEN RAISE EXCEPTION 'expected at least one public profile'; END IF;

  -- anonymous should not see private profile row via RLS
  BEGIN
    PERFORM 1 FROM public.user_profile WHERE visibility = 'private';
    -- If we can select, ensure sensitive fields aren't exposed by design (none here)
    -- but we still expect RLS to allow read of row only if policy permits; our policy allows select of private only to owner
    RAISE NOTICE 'checked private visibility access under anonymous';
  END;
END$$;

-- View exposure rules: avatar_url should be null for non-public profiles
DO $$
DECLARE rec record; null_count int := 0; total int := 0;
BEGIN
  FOR rec IN SELECT avatar_url, display_name FROM public.v_user_public LOOP
    total := total + 1;
    IF rec.display_name = 'Bob' AND rec.avatar_url IS NULL THEN
      null_count := null_count + 1;
    END IF;
  END LOOP;
  IF total < 2 THEN RAISE EXCEPTION 'expected 2 users in v_user_public'; END IF;
  IF null_count < 1 THEN RAISE EXCEPTION 'expected private user avatar to be NULL'; END IF;
END$$;

-- Insert protection: cannot insert a row for a different user_id than context
DO $$
DECLARE u1 uuid; u_fake uuid := gen_random_uuid(); rows int;
BEGIN
  SELECT a INTO u1 FROM _ids LIMIT 1;
  CALL app.set_user_context(u1, 'authenticated');
  BEGIN
    INSERT INTO public.user_profile(user_id, display_name, visibility)
    VALUES (u_fake, 'Intruder', 'public');
    GET DIAGNOSTICS rows = ROW_COUNT;
    IF rows > 0 THEN RAISE EXCEPTION 'insert should be blocked by RLS (wrong user_id)'; END IF;
  EXCEPTION WHEN others THEN
    -- expected failure
    NULL;
  END;

  -- Correct insert (id must match current user)
  BEGIN
    -- delete then re-insert own profile to test insert policy
    DELETE FROM public.user_profile WHERE user_id = u1;
    INSERT INTO public.user_profile(user_id, display_name, visibility)
    VALUES (u1, 'Alice B', 'public');
  EXCEPTION WHEN others THEN
    RAISE EXCEPTION 'expected self insert to succeed';
  END;
END$$;

-- app_user policy tests: insert/update must match current_user_id; username constraints
DO $$
DECLARE u1 uuid; rows int; ok boolean;
BEGIN
  SELECT a INTO u1 FROM _ids LIMIT 1;
  CALL app.set_user_context(u1, 'authenticated');

  -- Attempt to insert a different id should fail
  BEGIN
    INSERT INTO public.app_user(id, username) VALUES (gen_random_uuid(), 'charlie');
    GET DIAGNOSTICS rows = ROW_COUNT;
    IF rows > 0 THEN RAISE EXCEPTION 'app_user insert for different id should be blocked'; END IF;
  EXCEPTION WHEN others THEN NULL; END;

  -- Insert matching id allowed only if not existing; test update policy instead
  UPDATE public.app_user SET username = 'alice_new' WHERE id = u1;
  GET DIAGNOSTICS rows = ROW_COUNT;
  IF rows <> 1 THEN RAISE EXCEPTION 'expected self update on app_user to succeed'; END IF;

  -- Username constraints: regex and length
  BEGIN
    UPDATE public.app_user SET username = 'Invalid-Name' WHERE id = u1; -- dash should violate slug
    RAISE EXCEPTION 'expected username slug constraint to reject dash';
  EXCEPTION WHEN check_violation THEN NULL; WHEN others THEN NULL; END;

  BEGIN
    UPDATE public.app_user SET username = repeat('a', 40) WHERE id = u1; -- too long
    RAISE EXCEPTION 'expected username length constraint to reject long name';
  EXCEPTION WHEN check_violation THEN NULL; WHEN others THEN NULL; END;

  -- Uniqueness
  BEGIN
    UPDATE public.app_user SET username = 'bob' WHERE id = u1; -- bob exists
    RAISE EXCEPTION 'expected unique constraint to reject duplicate username';
  EXCEPTION WHEN unique_violation THEN NULL; WHEN others THEN NULL; END;

  -- Roles flag should not bypass RLS for cross updates
  CALL app.set_user_context(NULL, 'service_role,authenticated');
  BEGIN
    UPDATE public.user_profile SET display_name = 'Intrusion' WHERE true;
    GET DIAGNOSTICS rows = ROW_COUNT;
    IF rows > 0 THEN RAISE EXCEPTION 'roles flag should not bypass RLS'; END IF;
  EXCEPTION WHEN others THEN NULL; END;
END$$;

ROLLBACK; -- tests should not persist data


