# Frontend Testing Guide

This guide explains how to write and run tests for the frontend using **Vitest** (Unit/Integration) and **Playwright** (E2E).

## 1. Unit & Integration Testing (Vitest)

We use Vitest along with React Testing Library for component and logic testing.

### Naming Convention
- Test files should be co-located with the component they test.
- Suffix: `.test.tsx` or `.spec.tsx`.
- Example: `button.tsx` -> `button.test.tsx`.

### Writing a Test
Always use **arrow functions** for test blocks and follow the `describe`/`it` structure.

```typescript
import { render, screen } from '@testing-library/react';
import { UserProfile } from './user-profile';
import { describe, it, expect } from 'vitest';

describe('UserProfile', () => {
  it('should display the user name correctly', () => {
    // 1. Arrange
    const name = 'John Doe';
    
    // 2. Act
    render(<UserProfile name={name} />);
    
    // 3. Assert
    const element = screen.getByText(name);
    expect(element).toBeDefined();
  });
});
```

### Key Tools
- `render`: Renders a component into a virtual DOM.
- `screen`: Provides queries to find elements (e.g., `getByText`, `getByRole`).
- `fireEvent` / `userEvent`: Simulate user interactions.

---

## 2. E2E Testing (Playwright)

Playwright is used for high-level flow testing that requires a browser.

### Naming Convention
- E2E tests are located in the `apps/web/e2e/` directory.
- Suffix: `.spec.ts`.

### Writing an E2E Test
```typescript
import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
  await page.goto('/login');
  
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  
  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('h1')).toContainText('Welcome');
});
```

---

## 3. Running Tests Locally

| Command | Description |
|---------|-------------|
| `npm run test` | Run all unit tests once. |
| `npm run test:watch` | Run unit tests in watch mode (interactive). |
| `npm run test:coverage` | Run unit tests and generate coverage report. |
| `npm run test:e2e` | Run Playwright E2E tests (headless). |
| `npx playwright test --ui` | Run E2E tests with a UI for debugging. |

## 4. Best Practices
- **No Placeholders**: Use realistic data or mock data generators.
- **Accessibility First**: Use `getByRole` or `getByLabelText` to ensure components are accessible.
- **Isolated Tests**: Ensure tests do not depend on each other's state.
