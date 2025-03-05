const {test, expect} = require('@playwright/test')
test ('Flipkart', async ({page})=>{
    await page.goto('https://www.flipkart.com/');
    await page.waitForTimeout(5000);
    await page.locator("//input[@title='Search for Products, Brands and More']").fill("laptop");
    await page.waitForTimeout(3000);
    await page.press("//input[@title='Search for Products, Brands and More']","Enter");

    await page.screenshot({path:'tests/screenshot/abc.png'});
    await page.pause();


})