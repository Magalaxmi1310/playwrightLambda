import { test, expect, chromium } from '@playwright/test';
test.describe('Playwright Assignment', () => {
    test('Test Scenario2', async ({ page }) => {

        await page.goto('https://www.lambdatest.com/selenium-playground');
        await page.setViewportSize({ width: 1280, height: 720 });

        await page.locator('text=Drag & Drop Sliders').click();
        page.url().includes('drag-drop-range-sliders-demo');

        let slider = page.locator('input[type="range"][value="15"]');
        const outputVal = page.locator('#rangeSuccess');

        await slider.focus();
        for (let i = 15; i < 95; i++) {
            await slider.press('ArrowRight');

        }
        await expect(outputVal).toHaveText('95');
        console.log('Slider moved to 95');
    });


});