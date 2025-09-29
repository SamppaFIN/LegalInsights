-- Phase C: Core DB scaffolding — schemas and logical roles
-- This file is Postgres-compatible and avoids cloud-vendor specifics.

BEGIN;

-- Dedicated app schema for helper functions
CREATE SCHEMA IF NOT EXISTS app;

-- Logical roles (optional; adjust to your deployment's role model)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'service_role') THEN
    CREATE ROLE service_role NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
    CREATE ROLE authenticated;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anonymous') THEN
    CREATE ROLE anonymous;
  END IF;
END$$;

COMMIT;


