const {test, expect} = require('@playwright/test');
//# Single File #//
test('Upload', async({page}) =>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.waitForTimeout(2000);
    await page.locator("//input[@name='filesToUpload']").setInputFiles("D:/JS/Js_Basics/day1_Variables.js")
    await page.waitForTimeout(3000)


//# Multiple Files #//

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.waitForTimeout(2000);
    await page.locator("//input[@name='filesToUpload']").setInputFiles(["D:/JS/Js_Basics/day4_Functions.js","D:/JS/Js_Basics/luffy_gear_5.jpg","D:/JS/JS Interview Questions.txt"])
    await page.waitForTimeout(3000)

//# Remove UploadFile #//

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.waitForTimeout(2000);
    await page.locator("//input[@name='filesToUpload']").setInputFiles([]);
    await page.waitForTimeout(3000)
})