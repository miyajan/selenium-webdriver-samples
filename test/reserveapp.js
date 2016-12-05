const assert = require('assert');
const webdriver = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const FormPage = require('../page/reserveapp/formpage');

test.describe('Reserve App', function() {
    test.it('should work', function*() {
        const formPage = new FormPage(driver, true);

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        formPage.setDate(tomorrow);
        formPage.setName('Alice');
        const confirmPage = formPage.submit();
        const finalPage = confirmPage.confirm();

        const title = yield finalPage.getTitle();
        assert(title === 'hogehoge');
    });
});
