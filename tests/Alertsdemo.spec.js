const {test, expect} = require ('@playwright/test');
test ('Alertwithok' , async ({page}) =>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.waitForTimeout(3000);
    await page.waitForSelector("//h1[text()='Automation Demo Site ']");
    await page.click("//a[text()='Alert with OK ']");
    await page.waitForTimeout(2000);
    //await page.locator("//button[@onclick='alertbox()']")
    //await page.waitForTimeout(3000);

    //# Simple Alert #//
    //#Alert With Ok #//
    page.on('dialog' , async Alertwithok => {
        let type = await Alertwithok.type();
        expect(type).toContain('alert')
        let msg = await Alertwithok.message();
        expect(msg).toContain('I am an alert box!')
        await Alertwithok.accept();
        })

    //Enabled
    await page.click("//button[@onclick='alertbox()']")
    await page.waitForTimeout(5000);
    await page.screenshot({path:"demoalert.png"});
    
})

//#Conformation Alert #//
test('Alertwithokcancel', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.waitForTimeout(3000);
    await page.click("//a[text()='Alert with OK & Cancel ']")
    await page.waitForTimeout(3000);

    page.on('dialog', async Alertwithcancel =>{
        let tp = await Alertwithcancel.type();
        expect(tp).toContain('confirm');
        let msgs = await Alertwithcancel.message();
        expect(msgs).toContain('Press a Button !');
        await Alertwithcancel.dismiss();

    })
    await page.click("//button[text()='click the button to display a confirm box ']")
    await page.waitForTimeout(3000);

    let showmsg = await page.locator("//p[@id='demo']")
    expect(showmsg).toHaveText('You Pressed Cancel')
    let a = await page.textContent("//p[@id='demo']");
    console.log(a);

})
//# Prompt Alert #//
test.only('Alertwithtextbox', async ({page}) =>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.waitForTimeout(3000);
    await page.click("//a[text()='Alert with Textbox ']")
    await page.waitForTimeout(3000);

    page.on('dialog', async Alertwithtext =>{
        let typ = await Alertwithtext.type();
        expect(typ).toContain('prompt');
        let mesg = await Alertwithtext.message();
        expect(mesg).toContain('Please enter your name');
        let msbox = await Alertwithtext.defaultValue();
        expect(msbox).toContain('Automation Testing user');
        console.log("Default Message: " + msbox);
        await Alertwithtext.accept("Karthi");
    })
   await page.click("//button[text()='click the button to demonstrate the prompt box ']"); 
   await page.waitForTimeout(3000);
   //let showmg = await page.locator("//p[@id='demo1']");
   //expect(showmg).toContain('Hello Karthi How are you today');
   let b = await page.toHaveText("//p[@id='demo1']")
   console.log("Prompt Box" + b);
   
})
