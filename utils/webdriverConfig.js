const {Builder} = require('selenium-webdriver');
const { By, until } = require('selenium-webdriver');
require('chromedriver');

function getDriver(){
    return new Builder().forBrowser('chrome').build();
}

module.exports = getDriver;