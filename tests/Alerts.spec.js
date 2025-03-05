//#Syntax
//page.on('dialog', async dialog =>{
    //Perform actions and validations
//})

const {test, expect} = require ('@playwright/test');
//const { log } = require('console');

test ('Simple Alert', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForSelector("//a[text()='GUI Elements']")
     
    //# Simple Alert#// "Message box have only one option (Ok) so we give (accept)"
    //Enabled
    page.on('dialog' , async Popup =>{
       let type = await Popup.type();
       let msg = await Popup.message();
       expect(type).toContain('alert');
       expect(msg).toContain('I am an alert box!');
       await Popup.accept();// Simple Alert so we can use accept

    })
    //Trigger
    await page.click("//button[text()='Simple Alert']")
    await page.waitForTimeout(3000)
})


test('Confirm Alert', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
     
    //# Conformation Alert#//"Message box have Two option (Ok or Cancel) so we can give (accept or dismiss)"
    //Enabled
    page.on('dialog' , async PopBox => {
        let typ = await PopBox.type();
        expect(typ).toContain('confirm');

        let msgs = await PopBox.message();
        expect(msgs).toContain('Press a button!');
        await page.waitForTimeout(3000)
        await PopBox.dismiss();// Conformation Alert - so we can give (accept or dismiss)

    })
    
    //Trigger
    await page.click("//button[text()='Confirmation Alert']");
    await waitForTimeout(2000);

})

//# Prompt Alert #// "Msg box have Two option (Ok or Cancel) so we can give (accept or dismiss) and also we give some input like name or mail"
test.only('Prompt Alert', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);

    page.on('dialog', async Box => {
        //Enabled
        let b = await Box.type();
        expect(b).toContain('prompt')

        let m = await Box.message();
        expect(m).toContain('Please enter your name:');

        let value = await Box.defaultValue();
        expect(value).toContain('Harry Potter')

        await Box.accept("Raj");
    
    })
    //Trigger
    await page.click("//button[text()='Prompt Alert']")
    await page.waitForTimeout(3000)

    let showmsg = await page.locator("//p[@id='demo']")
    expect(showmsg).toHaveText('Hello Raj! How are you today?')
    await page.waitForTimeout(3000)
    console.log("Success");
    
})