const {test, expect} = require('@playwright/test');
const { log } = require('console');
test('Singledropdown', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(3000);
    await page.locator("//select[@id='country']").selectOption('France');//using Text
    await page.waitForTimeout(3000);
    await page.locator("//select[@id='country']").selectOption('canada');//using Value
    await page.waitForTimeout(3000);
    await page.locator("//select[@id='country']").selectOption({index:6})//using INDEX
    await page.waitForTimeout(3000);

    //Another Method//(page.selectoption(locator,selectoptions))
    await page.selectOption("//select[@id='country']",'Japan' )//Alternative method
})

test.only('Multipledropdown', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(3000);
    
    let countries = await page.$$("//select[@id='country']//child::option");
    await page.waitForTimeout(3000);

    for (let country of countries){
        let data = await country.textContent();
        console.log(data);

    }

     let Mobiles = ["samsung", "oppo", "apple", "oneplus", "vivo"];
     for(let Mobile of Mobiles){
        console.log(Mobile.toUpperCase());
     }  

})