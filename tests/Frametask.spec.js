const {test, expect} = require('@playwright/test');

test('frame', async({page}) =>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    await page.waitForTimeout(5000);

    let frames = await page.frames();
    console.log(frames.length);

    let enterdetailsFrame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

    await enterdetailsFrame.fill("//input[@name='mytext1']", "Raj");

    await page.waitForTimeout(2000);


    let enterdetails = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'});

    await enterdetails.fill("//input[@name='mytext2']", "Karthi")

    await page.waitForTimeout(2000)

    let enterFrame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

    await enterFrame.fill("//input[@name='mytext3']", "Suresh")

    await page.waitForTimeout(4000)

    let detailsFrame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4.html'});

    await detailsFrame.fill("//input[@name='mytext4']", "Mano")

    let detailsFrames = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'});

    await detailsFrames.fill("//input[@name='mytext5']", "Bala")

})