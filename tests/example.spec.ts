import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Starter Template', () => {
  test('example test', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('template-home.png');
  });
});
