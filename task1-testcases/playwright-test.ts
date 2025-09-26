import { test, expect, chromium, firefox } from '@playwright/test';

const URL = 'https://playwright.dev/';
const EXPECTED_TITLE = 'Fast and reliable end-to-end testing for modern web apps | Playwright';

const browsers = [
  { name: 'chromium', launcher: chromium },
  { name: 'firefox', launcher: firefox }
];

for (const browserType of browsers) {
  test(`Проверка заголовка страницы на ${browserType.name}`, async () => {
    const browser = await browserType.launcher.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(URL);
    await expect(page).toHaveTitle(EXPECTED_TITLE);

    await browser.close();
  });
}

