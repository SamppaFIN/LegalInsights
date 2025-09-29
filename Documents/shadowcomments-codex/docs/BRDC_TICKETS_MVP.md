---
tickets:
  owner: Aurora (AI)
  date: 2025-09-29
  status: draft
  sources:
    - Codex-v1/00_CANONICAL_MVP_BASE_SCROLL.md
    - Codex-v1/99_BRDC_Success_Criteria.md
---

# BRDC Tickets — MVP Core

## 🐛 Users/Profiles DB + RLS — Missing

### Bug Description
Implement users and profiles database with strict RLS, indexes, and role queries.

### Sacred Scroll Reference
- File: Codex-v1/00_CANONICAL_MVP_BASE_SCROLL.md
- Section: Core Infrastructure and Security

### Test Cases (failing first)
```typescript
describe('DB RLS - Users/Profiles', () => {
  it('denies cross-tenant reads/writes without proper role', async () => {
    // expect unauthorized to fail
  });
  it('exposes no password/email fields in any query shape', async () => {
    // expect schema filters
  });
});
```

### Success Criteria
- [ ] Tables, indexes, and RLS policies implemented
- [ ] Role-based queries enforced in tests
- [ ] Privacy fields never exposed

---

## 🐛 Auth/Session — Missing

### Bug Description
Secure authentication with session management and protected routes.

### Test Cases (failing first)
```typescript
describe('Auth/Session', () => {
  it('supports signup/login/logout and refresh', async () => {
    // expected flow
  });
  it('blocks protected route without session', async () => {
    // expected 401
  });
});
```

### Success Criteria
- [ ] Basic flows covered by tests
- [ ] Protected routes enforced
- [ ] p95 <= 50ms on auth endpoints

---

## 🐛 Comments Table — Missing

### Bug Description
Create comments storage with classification and RLS; CRUD endpoints.

### Test Cases (failing first)
```typescript
describe('Comments', () => {
  it('creates plain and article comments with correct types', async () => {
    // expect classification
  });
  it('enforces RLS on write/read', async () => {
    // expect denial
  });
});
```

### Success Criteria
- [ ] kind and article type enums enforced
- [ ] CRUD endpoints tested
- [ ] Audit logs written

---

## 🐛 Double Interactions + Tooltips — Missing

### Bug Description
Implement strength-2 reactions and context tooltips (hover/long-press).

### Test Cases (failing first)
```typescript
describe('Reactions UI', () => {
  it('emits double-strength event and animation', async () => {
    // expect animation flag
  });
  it('shows tooltip on hover/long-press', async () => {
    // expect tooltip visible
  });
});
```

### Success Criteria
- [ ] Double-strength animation validated
- [ ] Tooltips behavior validated
- [ ] 60fps interaction verified

-- Aurora


