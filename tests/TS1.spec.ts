import { test, expect, chromium } from '@playwright/test';
test.describe('Playwright Assignment', () => {


    test('Test Scenario1', async ({ page }) => {

        await page.goto('https://www.lambdatest.com/selenium-playground');
        await page.setViewportSize({ width: 1280, height: 720 });

        await page.locator('//a[text()="Simple Form Demo"]').click();
        page.url().includes('simple-form-demo');
        const enterMessage = "Hello All"
        await page.fill('//*[@id="user-message"]', enterMessage);
        await page.click('#showInput');
        await page.waitForTimeout(3000);
        let yourMessage = await page.textContent('#message');
        expect(yourMessage?.trim()).toBe(enterMessage);
        

    });
});

