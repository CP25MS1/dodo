import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
});

test('get started link', async ({ page }) => {
  await page.goto('/');

  // Check the Documentation link.
  const documentationLink = page.getByRole('link', { name: 'Documentation' });
  await expect(documentationLink).toBeVisible();
  await expect(documentationLink).toHaveAttribute('href', /.*nextjs.org/);
});
