const webdriver = require('selenium-webdriver');
const until = webdriver.until;

class BasePage {
    constructor(driver, locatedElementSelector, url = null, open = false) {
        this.driver = driver;
        this.waitTimeMS = 10000;

        if (open) {
            this.driver.get(url);
        }

        this.driver.wait(until.elementLocated(locatedElementSelector), this.waitTimeMS);
    }

    getTitle() {
        return this.driver.getTitle();
    }
}

module.exports = BasePage;
