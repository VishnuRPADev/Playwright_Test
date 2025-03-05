const {test, expect} = require ('@playwright/test')
test ('facebook',async({page})=>{
    await page.goto('https://www.facebook.com/');
    let pagename = await page.title()
    await expect(page).toHaveTitle(pagename)
    await page.waitForTimeout(3000);
    await page.press("(//a[@role='button'])[2]","Enter")
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='firstname']").fill("Vishnu")
    await page.waitForTimeout(2000);
    await page.locator("//input[@name='lastname']").fill("Rajan")
    await page.waitForTimeout(3000);
    await page.selectOption("//select[@id='day']",'6')
    await page.waitForTimeout(3000);
    await page.locator("//select[@id='month']").selectOption('Jun')
    await page.waitForTimeout(3000);
    await page.selectOption("//select[@name='birthday_year']",'2000')
    await page.waitForTimeout(3000);
    await page.locator("(//input[@type='radio'])[2]").check()
    await page.waitForTimeout(3000);
    await page.fill("//input[@name='reg_email__']",'RVP')
    let months = await page.$$("//select[@name='birthday_month']//child::option")
    await page.waitForTimeout(3000);

    for (let mon of months){
        let mname = await mon.textContent()
        console.log(mname)

    }

})