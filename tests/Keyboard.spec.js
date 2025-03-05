const {test, expect} = require('@playwright/test');

test('KeyBoard Action', async({page}) =>{
    await page.goto("https://www.facebook.com/");

    await page.waitForTimeout(3000)

    await page.keyboard.insertText("Hello World");

    await page.dblclick("//input[@type='text']");

    await page.keyboard.down('Control');
    await page.keyboard.press('C');
    await page.keyboard.up('Control');

    await page.keyboard.press('Tab');

    await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control')
    
    await page.waitForTimeout(7000)


})