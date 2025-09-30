Contributing Guide

Workflow
- Create a bug ticket (BRDC) for every change; attach AC and budgets.
- Start with RED: add failing tests.
- Make minimal GREEN edits; keep diffs small.
- Verify gates (coverage, mutation, perf, security, a11y).
- Update AURORA_LOG and ensure persona prefixes.

Commands
- Build: `./build.sh` or `./build.ps1`
- Factory: `python scripts/factory.py <plan|red|green|verify|docs|build>`
- Dev watch: `scripts/dev.sh --watch` or `scripts/dev.ps1 -Watch`

Environment
- Copy `env.example` to `.env` and set `OPENROUTER_API_KEY`.
- Optional advice: `ADVICE_ON_PLAN=1`, `ADVICE_ON_DOCS=1`.

CI
- PRs must pass tests and gates.
- Persona prefix linter is warning-only for now.
