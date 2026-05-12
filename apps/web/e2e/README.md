E2E test structure for the `dodo` app.

- `fixtures/` — static data used by tests (JSON, images)
- `helpers/` — reusable functions (e.g., login helpers)
- `specs/` — Playwright test files (`*.spec.ts` or `*.test.ts`)
- `support/` — shared setup/teardown and custom utilities

Run Playwright from `apps/web` (where `playwright.config.ts` lives):

```bash
cd apps/web
npx playwright test
```
