const {test, expect} = require('@playwright/test')
test('Insta',async({page})=>{
await page.goto('https://www.instagram.com/')
let Instag = await page.title();
//Assertion
//    //Actual            //Expected
await expect(page).toHaveTitle(Instag);

await page.goto('http://www.flipkart.com/');
// let currentURL = await page.url();
// await expect(page).toHaveURL(currentURL)

let grocery = await page.getByAltText('Grocery');
await page.waitForTimeout(3000);
await expect(grocery).toBeVisible();
await page.fill("//input[@type='text']", "Laptop")

let Search = await page.getByText('Search Icon')

await expect(Search).toBeEnabled();

let a = await page.url();
let b = await page.title();
await expect(page).toHaveTitle(b);


})