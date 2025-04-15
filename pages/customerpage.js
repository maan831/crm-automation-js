const { By, until } = require('selenium-webdriver');

class CustomerPage{
    constructor(driver){
        this.driver = driver;
    }
    async goToCustomers(){
        await this.driver.findElement({id: 'new-customer'});
    }

    async addCustomer(firstName, lastName, email,city) {
        await this.driver.findElement({id: 'new-customer'}).click();
        await this.driver.findElement({id: 'FirstName'}).sendKeys(firstName);
        await this.driver.findElement({id: 'LastName'}).sendKeys(lastName);
        await this.driver.findElement({id: 'EmailAddress'}).sendKeys(email);
        await this.driver.findElement({id: 'City'}).sendKeys(city);
        await this.driver.findElement(By.css('button[type="submit"]')).click();
    }
    async getSuccessAlertText(){
         return await this.driver.findElement({id: 'Success'}).getText();
    }
}

module.exports = CustomerPage;