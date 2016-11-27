const BasePage = require('./basepage.js');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;

class FinalPage extends BasePage {
    constructor(driver) {
        super(driver, By.id('returnto_checkInfo'));
    }
}

module.exports = FinalPage;
