const { expect } = require('chai');
const getDriver = require('../utils/webdriverConfig');
const LoginPage = require('../pages/loginpage');

describe('Login Functionality', function () {
    let driver, loginpage;

    this.timeout(10000); // Increased timeout

    before(async () => {
        driver = await getDriver();
        loginpage =   new LoginPage(driver);
    });

    it('should login with valid credentials', async () => {
        await loginpage.open();
        await loginpage.login('admin@crm.com', 'admin');
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.include('customers.html'); // Adjusted check
    });

    after(async () => {
        await driver.quit();
    });
});
