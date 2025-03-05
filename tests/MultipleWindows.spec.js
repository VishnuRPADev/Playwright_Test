//# Syntax #//
//const browser = = await chromium.launch({
// headless: false // Runs the browser in headless mode (default: true) 
// slowMo: 50 // Slow
//})

//# Multiple Windows or Browser Context #//
const {test, expect, chromium} = require('@playwright/test');

test('Browser Context', async() =>{
    let browser = await chromium.launch();
    let ContextA = await browser.newContext();
    
    let tabA1 = await ContextA.newPage()
    await tabA1.goto("https://testautomationpractice.blogspot.com/")
    await tabA1.waitForTimeout(3000)

    let tabA2 = await ContextA.newPage()
    await tabA2.goto("https://demo.automationtesting.in/Alerts.html")
    await tabA2.waitForTimeout(3000)

    let tabA3 = await ContextA.newPage()
    await tabA3.goto("https://playwright.dev/")
    await tabA3.waitForTimeout(5000)

    await tabA1.bringToFront();

    await tabA1.waitForTimeout(5000)


    let ContextB = await browser.newContext();
    let tabB1 = await ContextB.newPage()
    await tabB1.goto("https://www.facebook.com/")
    await tabB1.waitForTimeout(5000)

    let tabB2 = await ContextB.newPage()
    await tabB2.goto("https://www.instagram.com/")
    await tabB2.waitForTimeout(3000)




    


})