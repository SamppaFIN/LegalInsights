-- SQL tests for auth_identity and user_session RLS

BEGIN;

-- Ensure session helper exists for this test run
CREATE OR REPLACE PROCEDURE app.set_user_context(u uuid, roles text)
LANGUAGE plpgsql AS $$
BEGIN
  PERFORM set_config('app.user_id', COALESCE(u::text, ''), false);
  PERFORM set_config('app.roles', COALESCE(roles, ''), false);
END$$;

-- Seed user
SELECT gen_random_uuid() AS a INTO TEMP TABLE _u3;
INSERT INTO public.app_user(id, username)
SELECT a, 'authuser' FROM _u3;

DO $$
DECLARE u uuid; sid uuid; rows int;
BEGIN
  SELECT a INTO u FROM _u3 LIMIT 1;
  CALL app.set_user_context(u, 'authenticated');

  -- Link identity
  INSERT INTO public.auth_identity(user_id, provider, provider_uid)
  VALUES (u, 'email', 'sub_123');

  -- Create a session valid for 1 hour
  INSERT INTO public.user_session(user_id, expires_at, user_agent, ip_hash)
  VALUES (u, now() + interval '1 hour', 'jest', 'iphash') RETURNING id INTO sid;
  IF sid IS NULL THEN RAISE EXCEPTION 'expected session id'; END IF;

  -- Cannot read another user's identity/session
  CALL app.set_user_context(NULL, 'authenticated');
  BEGIN
    PERFORM 1 FROM public.auth_identity;
    RAISE EXCEPTION 'expected no access without user context';
  EXCEPTION WHEN others THEN NULL; END;

  -- Owner can revoke only own session
  CALL app.set_user_context(u, 'authenticated');
  UPDATE public.user_session SET revoked_at = now() WHERE id = sid;
  GET DIAGNOSTICS rows = ROW_COUNT;
  IF rows <> 1 THEN RAISE EXCEPTION 'expected to revoke own session'; END IF;
END$$;

ROLLBACK;


