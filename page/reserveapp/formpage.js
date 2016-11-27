const BasePage = require('./basepage.js');
const ConfirmPage = require('./confirmpage');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;

class FormPage extends BasePage {
    constructor(driver, open = false) {
        const submitSelector = By.id('goto_next');
        const url = 'http://example.selenium.jp/reserveApp/';
        super(driver, submitSelector, url, open);

        this.submitSelector = submitSelector;
    }

    setDate(date) {
        this.driver.findElement(By.id('reserve_year')).clear();
        this.driver.findElement(By.id('reserve_year')).sendKeys(date.getFullYear());
        this.driver.findElement(By.id('reserve_month')).clear();
        this.driver.findElement(By.id('reserve_month')).sendKeys(date.getMonth() + 1);
        this.driver.findElement(By.id('reserve_day')).clear();
        this.driver.findElement(By.id('reserve_day')).sendKeys(date.getDate());
    }

    setName(name) {
        this.driver.findElement(By.id('guestname')).sendKeys(name);
    }

    submit() {
        this.driver.findElement(this.submitSelector).click();
        return new ConfirmPage(this.driver);
    }
}

module.exports = FormPage;
