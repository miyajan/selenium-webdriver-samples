const assert = require('assert');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const test = require('selenium-webdriver/testing');

test.describe('Reserve App', function() {
    test.it('should work', function*() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        driver.get('http://example.selenium.jp/reserveApp/');
        driver.findElement(By.id('reserve_year')).clear();
        driver.findElement(By.id('reserve_year')).sendKeys(tomorrow.getFullYear());
        driver.findElement(By.id('reserve_month')).clear();
        driver.findElement(By.id('reserve_month')).sendKeys(tomorrow.getMonth() + 1);
        driver.findElement(By.id('reserve_day')).clear();
        driver.findElement(By.id('reserve_day')).sendKeys(tomorrow.getDate());
        driver.findElement(By.id('guestname')).sendKeys('Alice');
        driver.findElement(By.id('goto_next')).click();
        driver.findElement(By.id('commit')).click();

        const title = yield driver.getTitle();
        assert(title === '予約完了');
    });
});
