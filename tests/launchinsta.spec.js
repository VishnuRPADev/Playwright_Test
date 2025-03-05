// const {test, expect} = require ('@playwright/test')
// test ('Launch Insta' , async ()=> {
//   await
// })

const {test, expect} = require('@playwright/test')
test ('launch Insta' , async ({page}) =>{
    await page.goto('https://www.instagram.com/');
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='username']").fill("Vishnu")
    await page.waitForTimeout(3000);
})