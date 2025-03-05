
  const {test, expect} = require('@playwright/test')
  test ('Swaglabs', async ({page})=>{
      await page.goto('https://www.saucedemo.com/v1/');
      await page.waitForTimeout(3000);
      await page.locator("//input[@id='user-name']").fill("standard_user");
      await page.waitForTimeout(3000);
      await page.locator("//input[@id='password']").fill("secret_sauce");
      await page.waitForTimeout(3000);
      await page.locator("//input[@id='login-button']").click();
      await page.waitForTimeout(2000);
      await page.locator("//div[text()='Sauce Labs Backpack']").click();
      await page.waitForTimeout(2000);
      await page.locator("//button[text()='ADD TO CART']").click();
      await page.waitForTimeout(3000);
      await page.goBack();
      await page.waitForTimeout(3000);
      await page.locator("//div[text()='Sauce Labs Fleece Jacket']").click();
      await page.waitForTimeout(2000);
      await page.locator("//button[text()='ADD TO CART']").click();
      await page.waitForTimeout(2000);
      await page.locator("svg[role='img']").click()
      await page.waitForTimeout(2000);
      await page.screenshot({path:'tests/screenshot/ShopingCart.png'});
      await page.waitForTimeout(2000);
      await page.click("//a[text()='CHECKOUT']");
      await page.fill("//input[@id='first-name']","Vishnu");
      
      await page.fill("//input[@id='last-name']","R");
      
      await page.fill("//input[@id='postal-code']","600028");
      
      await page.click("//input[@type='submit']");
      
      await page.screenshot({path:'tests/screenshot/' + Date.now() +'Final.png', fullPage:true})
      
      await page.click("//a[text()='FINISH']");



      //await page.screenshot({path:'tests/screenshot/abc.png'});
      await page.pause();
  
  
  })