const {test, expect, chromium} = require('@playwright/test');

test('Browser Context', async() =>{
    let browser = await chromium.launch();
    let ContextA = await browser.newContext();
    
    let tabA1 = await ContextA.newPage()
    await tabA1.goto("https://www.instagram.com/")
    await tabA1.waitForTimeout(3000)

    let tabA2 = await ContextA.newPage()
    await tabA2.goto("https://www.facebook.com/")
    await tabA2.waitForTimeout(3000)

    let tabA3 = await ContextA.newPage()
    await tabA3.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await tabA3.waitForTimeout(5000)
    
    let tabA4 = await ContextA.newPage()
    await tabA4.goto("https://in.bookmyshow.com/explore/home/chennai")
    await tabA4.waitForTimeout(8000)

    await tabA1.bringToFront();
})

test.only('HRM Browsers', async() =>{
    let browser = await chromium.launch();
    let ContextA = await browser.newContext();
    
    let Orangehrm = await ContextA.newPage()
    await Orangehrm.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const newTab = ContextA.waitForEvent('page')// Page is a method like 'Dialog'

    await Orangehrm.click("//a[text()='OrangeHRM, Inc'] ")
    await tabA3.waitForTimeout(5000)

    const OrangeInc = await newTab;

    await OrangeInc.click("//button [text()='Book a Free Demo']")
})