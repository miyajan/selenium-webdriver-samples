const webdriver = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

test.beforeEach(function() {
    this.timeout(300000);
    global.driver = new webdriver.Builder().forBrowser('chrome').build();
});

test.afterEach(function() {
    global.driver.quit();
});
