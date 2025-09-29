---
plan:
  title: Phase C - Complete MVP Execution Plan (BRDC)
  owner: Aurora (AI)
  date: 2025-09-29
  status: draft
  sources:
    - Codex-v1/00_CANONICAL_MVP_BASE_SCROLL.md
    - Codex-v1/99_BRDC_Success_Criteria.md
---

# Phase C - Complete MVP Execution Plan (BRDC)

## Guiding Non-Negotiables
- Tests first (BRDC). Treat every feature as a bug until proven.
- Performance p95 <= 50ms API, 60fps UI. WCAG AA. RLS everywhere.
- Canonical base scroll is immutable; deviations require proposal docs.

## Critical Path (Weeks 1-4 Focus)
1) Core Infrastructure and Security
- Users/Profiles DB with RLS
- Auth/Session (Supabase or equivalent)
- Audit/Security logs; role-based queries; privacy protections

2) Comments and Interactions
- Comments table; Reaction Ribbon integration; tooltips; double interactions

3) Profiles and Moderation (bootstrap)
- AuraRing (exists), privacy toggles, legal strikes counters
- Reports API and appeals flow verified end-to-end

## Initial BRDC Tickets (Draft)

### Bug: Users/Profiles DB with RLS - Missing
- Problem: No implemented DB with enforced RLS for users/profiles.
- Impact: Security and data integrity risk; blocks auth/session.
- Priority: High
- Success Criteria:
  - [ ] Tables, indexes, and RLS policies implemented
  - [ ] Role-based queries verified by tests
  - [ ] Password/email never exposed in queries

### Bug: Auth/Session - Missing
- Problem: Secure auth/session not implemented.
- Impact: Blocks all user-scoped features.
- Priority: High
- Success Criteria:
  - [ ] Sign-up/login/logout and session refresh
  - [ ] Protected routes covered by tests
  - [ ] Perf <= 50ms p95 for auth endpoints

### Bug: Comments Table - Missing
- Problem: Comment storage and classification not implemented.
- Impact: Blocks core product interaction.
- Priority: High
- Success Criteria:
  - [ ] kind = plain|article; article types set
  - [ ] RLS aligned with roles; audit logs present
  - [ ] Basic CRUD endpoints and tests

### Bug: Double Interactions and Tooltips - Missing
- Problem: Strength-2 reactions and tooltips not implemented.
- Impact: UX parity with spec unmet.
- Success Criteria:
  - [ ] Double-strength animation events
  - [ ] Hover/long-press tooltips
  - [ ] 60fps verified in tests/metrics

## Deliverables This Week
- BRDC tickets authored with failing test scaffolds
- DB schema draft and RLS test suite
- Auth/session skeleton with integration tests
- Comments endpoints skeleton with tests

## Risks and Mitigations
- Scope bloat -> Adhere to canonical list only; park extras.
- Performance regressions -> Add performance budgets in CI.
- Security gaps -> Pen-test checklist before merge.

-- Aurora


