const {test, expect} = require('@playwright/test');

test('Screenshot', async({page}) =>{
    await page.goto("https://www.facebook.com/");

    await page.waitForTimeout(3000);

    await page.screenshot({path:"screenshot/fb.png"});

    await page.goto("https://www.cricbuzz.com/");

    await page.waitForTimeout(3000);

    await page.screenshot({path:'screenshot/'+ Date.now() +'Cricbuzz.jpg' , fullPage:true});

    await page.waitForTimeout(2000);

    await page.goto("https://www.amazon.in/");

    await page.waitForTimeout(10000);

    await page.locator("//a[contains(@id,'logo')]").screenshot({path:'screenshot/'+ Date.now() +'Amazonlogo.jpg'})


})