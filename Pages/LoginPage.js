class LoginPage {

    constructor(page){
        this.page = page;
        this.username = '[data-test="username"]';
        this.password = '[data-test="password"]';
        this.loginBtn = '#login-button';
        this.logo = "//div[text()='Swag Labs']";
        }
        
        async login( username , password){
            await this.page.fill(this.username, username)
            await this.page.fill(this.password , password)
            await this.page.click(this.loginBtn)
        }
        
        async navigateToLoginPage(){
            await this.page.goto('https://www.saucedemo.com/')
        
        }

    }

    module.exports = {LoginPage}