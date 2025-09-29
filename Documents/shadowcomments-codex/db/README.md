# Database — Setup, Migrate, Test

This folder contains Postgres-compatible schema and SQL tests for Supabase. It prefers `auth.uid()` and JWT claims but also runs locally using session settings.

Prerequisites
- psql installed (Windows path often: `C:\Program Files\PostgreSQL\<version>\bin`)
- Supabase Postgres connection string (DATABASE_URL) with migration privileges

Example DATABASE_URL
```
postgresql://postgres:<password>@db.<project>.supabase.co:5432/postgres?sslmode=require
```

One-time environment (PowerShell)
```
$env:DATABASE_URL="postgresql://postgres:<password>@db.<project>.supabase.co:5432/postgres?sslmode=require"
# optional PATH for this session
$env:Path = "C:\\Program Files\\PostgreSQL\\18\\bin;" + $env:Path
```

Run migrations (ordered by filename)
```
.\scripts\migrate.ps1
```

Run tests (each file begins and ends transactions)
```
.\scripts\test_db.ps1
```

Troubleshooting
- DNS/IPv6: if only AAAA is returned and IPv4 is required, resolve an A record and append `&hostaddr=<ipv4>` to `DATABASE_URL`.
- Permissions: migration role needs CREATE/ALTER on schemas `public` and `app`, RLS policy management, and `CREATE EXTENSION pgcrypto`.
- Supabase: the optional `auth.users` trigger is created only if the table exists.

Files
- `db/schema/*.sql` — schema, functions, RLS, views
- `db/tests/*.sql` — SQL tests for RLS and behavior
- `db/monster_init_with_tests.sql` — consolidated installer (kept for convenience)
