const BasePage = require('./basepage.js');
const FinalPage = require('./finalpage');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;

class ConfirmPage extends BasePage {
    constructor(driver) {
        const commitSelector = By.id('commit');
        super(driver, commitSelector);

        this.commitSelector = commitSelector;
    }

    confirm() {
        this.driver.findElement(this.commitSelector).click();
        return new FinalPage(this.driver);
    }
}

module.exports = ConfirmPage;
