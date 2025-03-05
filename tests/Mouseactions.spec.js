const {test, expect} = require('@playwright/test');

test('Mouse Action', async({page}) =>{
    await page.goto("https://www.myntra.com/");

    await page.waitForTimeout(5000);

    let home = await page.locator("(//a[text()='Home & Living'])[1]");

    await page.hover();//For select options for homepage

    await page.click("//a[text()='Clocks']");

    await page.waitForTimeout(5000);

    let currentTitle = await page.title();
    console.log(currentTitle);

    await expect(page).toHaveTitle(currentTitle);

    await page.getByPlaceholder("//input[@placeholder='Search for products, brands and more']").fill("Bags");

    await page.mouse.dblclick("(//input[contains(@placeholder,'Search for products, brands and more')])[1]", "Enter");//Doubule Click

    await page.waitForTimeout(3000);

    await page.mouse.wheel(0,1400);//Scroll Down

    await page.waitForTimeout(3000);

    await page.mouse.wheel(0,-400);//Scroll Up

    await page.waitForTimeout(3000);

    //# Right Click #//
    //await page.click('locator' , {button:'right'});


})