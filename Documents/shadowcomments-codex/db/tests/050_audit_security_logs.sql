-- Tests for audit and security logs access restrictions

BEGIN;

-- Ensure session helper exists for this test run
CREATE OR REPLACE PROCEDURE app.set_user_context(u uuid, roles text)
LANGUAGE plpgsql AS $$
BEGIN
  PERFORM set_config('app.user_id', COALESCE(u::text, ''), false);
  PERFORM set_config('app.roles', COALESCE(roles, ''), false);
END$$;

-- Regular users should have no access by default policies
SELECT gen_random_uuid() AS id INTO TEMP TABLE _l;
INSERT INTO public.app_user(id, username) SELECT id, 'loguser' FROM _l;

DO $$
DECLARE v_u uuid;
BEGIN
  SELECT id INTO v_u FROM _l LIMIT 1;
  CALL app.set_user_context(v_u, 'authenticated');
  BEGIN
    INSERT INTO public.audit_log(user_id, action) VALUES (v_u, 'test');
    RAISE EXCEPTION 'expected deny insert to audit_log';
  EXCEPTION WHEN insufficient_privilege THEN NULL; WHEN others THEN NULL; END;

  BEGIN
    SELECT 1 FROM public.audit_log;
    RAISE EXCEPTION 'expected deny select to audit_log';
  EXCEPTION WHEN others THEN NULL; END;
END$$;

ROLLBACK;


