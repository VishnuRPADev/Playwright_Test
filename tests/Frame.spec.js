const {test, expect} = require('@playwright/test');

test('frame', async({page}) =>{
    await page.goto("https://letcode.in/frame");

    await page.waitForTimeout(5000);

    let frames = await page.frames();
    console.log(frames.length);

    let enterdetailsFrame = await page.frame({url:'https://letcode.in/frameUI'});

    await enterdetailsFrame.fill("//input[@name='fname']", "Vishnu");

    let detailsFrame = await page.frame({name:'firstFr'});

    await detailsFrame.fill("//input[@name='lname']", "Rajan");

    await page.waitForTimeout(3000);

    await page.frame({url:"https://letcode.in/innerFrame"}).fill("//input[@name='email']")

    await page.waitForTimeout(3000);

    
})
