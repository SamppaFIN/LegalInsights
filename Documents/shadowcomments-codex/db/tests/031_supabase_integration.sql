-- Test for JWT-based current_user_id resolution and ensure_current_user

BEGIN;

-- Simulate a Supabase JWT claim
SELECT gen_random_uuid() AS uid INTO TEMP TABLE _s;
DO $$
DECLARE u uuid; before int; after int;
BEGIN
  SELECT uid INTO u FROM _s LIMIT 1;
  PERFORM set_config('request.jwt.claims', json_build_object('sub', u::text, 'name', 'sb_user')::text, false);

  -- ensure current user resolves
  IF app.current_user_id() IS NULL THEN RAISE EXCEPTION 'expected current_user_id from JWT'; END IF;

  -- ensure provisioning works
  SELECT count(*) INTO before FROM public.app_user WHERE id = u;
  PERFORM app.ensure_current_user();
  SELECT count(*) INTO after FROM public.app_user WHERE id = u;
  IF after < GREATEST(1, before) THEN RAISE EXCEPTION 'expected user to be ensured'; END IF;
END$$;

ROLLBACK;


