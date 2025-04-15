const { By, until } = require('selenium-webdriver');

class LoginPage{
    constructor(driver){
        this.driver = driver;
        this.url = 'https://automationplayground.com/crm/login.html' ;
    }
    async open(){
        await this.driver.get(this.url);
    } 
    async login(username, password){
          await this.driver.findElement({id: 'email-id'}).sendKeys(username);
          await this.driver.findElement({id: 'password'}).sendKeys(password);
          await this.driver.findElement({id: 'submit-id'}).click();
    }

}

module.exports = LoginPage;