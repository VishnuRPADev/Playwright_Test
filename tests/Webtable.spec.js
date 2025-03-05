const {test, expect} = require('@playwright/test');

test('Webtable', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.waitForTimeout(7000);

    let rows = await page.locator('[name="BookTable"] tbody tr');
    let rowCount = await rows.count();
    console.log('Rows Count : ' + rowCount);
    

    let columns = await page.locator('[name="BookTable"] tbody tr th');
    let columnCount = await columns.count();
    console.log(`Columns Count : ${columnCount}`);
    
    let Specific_Row = await page.locator('[name="BookTable"] tbody tr:nth-child(4) td');
    let text = await Specific_Row.allTextContents();
    console.log(`Row 3 :  ${text}`);

    let data = await page.locator('[name="BookTable"] tbody tr:nth-child(4) td:nth-child(3)').textContent();

    console.log(`Particular Data : ${data}`);

    for (let i = 2; i<=rowCount ; i++){
        let allData = await page.locator(`//table[@name='BookTable']/tbody/tr[${i}]/td`).allTextContents();
        console.log(`Row ${i}  : ${allData}`);
        
    }
    
    
})