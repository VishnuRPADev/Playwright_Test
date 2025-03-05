const {test,expect} = require ('@playwright/test')
test ('Amazon', async ({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(5000);
    await page.locator("//input[@placeholder='Search Amazon.in']").fill("laptop");
    await page.waitForTimeout(3000);

    await page.screenshot({path:'screenshot\abc.png'});


}) 