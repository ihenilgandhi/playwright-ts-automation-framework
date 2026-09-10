import { test, expect } from '@playwright/test';

test('SauceDemo application should load successfully', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Swag Labs/);
});