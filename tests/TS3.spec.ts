import { test, expect, chromium } from '@playwright/test';
test.describe('Playwright Assignment', () => {

    test('Test Scenario3', async ({ page }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground');
        await page.setViewportSize({ width: 1280, height: 720 });

        await page.locator('text=Input Form Submit').click();
        page.url().includes('input-form-submit');
        await page.fill('input[name="name"]', 'John Doe');
        await page.fill('input[placeholder="Email"]', 'john.doe@example.com');
        await page.fill('input[name="company"]', 'LambdaTest');
        await page.fill('input[name="website"]', 'https://www.example.com');
        await page.fill('input[name="city"]', 'New York');
        await page.fill('input[name="address_line1"]', '123 Main St');
        await page.fill('input[name="address_line2"]', 'Suite 100');
        await page.fill('input[id="inputState"]', 'NY');
        await page.fill('input[name="zip"]', '10001');
        await page.click('//button[text()="Submit"]');


        const validationMsg = await page.$eval('input[name="password"]', el => (el as HTMLInputElement).validationMessage);
        console.log('Validation Message:', validationMsg);
        expect(validationMsg).toBe('Please fill out this field.');

        await page.fill('input[name="password"]', 'Password123');
        await page.selectOption('select[name="country"]', 'United States');
        await page.click('//button[text()="Submit"]');

        await expect(page.locator('.success-msg')).toHaveText('Thanks for contacting us, we will get back to you shortly.');


    });
});