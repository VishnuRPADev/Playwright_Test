
const Utils = require('../util.js');

class CartPage{


constructor(page){
    this.page= page;
    this.checkout = '#checkout';
    this.firstname = '[data-test="firstName"]';
    this.lastName = '[data-test="lastName"]'
    this.address ='[data-test="postalCode"]';
    this.continue = "//input[@name='continue']";

}


async fillDetails(firstName , lastName , pincode){
    await this.page.locator(this.checkout).click();
    await this.page.locator(this.firstname).fill(firstName);
    await this.page.locator(this.lastName).fill(lastName);
    await this.page.locator(this.address).fill(pincode);
    await this.page.locator(this.continue).click();
}

}
module.exports = { CartPage };