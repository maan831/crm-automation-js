const { expect } = require('chai');
const getDriver = require('../utils/webdriverConfig');
const LoginPage = require('../pages/loginpage');
const CustomerPage = require('../pages/customerpage');

describe('Customer Management Test', function () {
    let driver, loginPage, customerPage;

    this.timeout(40000);

    before(async () => {
        driver = getDriver();
        loginPage = new LoginPage(driver);
        customerPage = new CustomerPage(driver);

        await loginPage.open();
        await loginPage.login('admin@crm.com', 'admin');
    });

    it('should add new customer', async () => {
        await customerPage.goToCustomers();
        await customerPage.addCustomer('Manmeet', 'Singh', 'maansb2001@gmail.com','satna');

        const alert = await customerPage.getSuccessAlertText();
        expect(alert.toLowerCase()).to.include('success');
    });

    after(async () => {
        await driver.quit();
    });
});
