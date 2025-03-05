const { test,expect } = require('@playwright/test');
test ('Playwright' , async ({Page}) => {
    await Page.goto("https://playwright.dev/");
    await page.waitforTimeout(3000);

})
