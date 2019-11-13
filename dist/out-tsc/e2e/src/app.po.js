import { browser, by, element } from 'protractor';
export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl);
    }
    getTitleText() {
        return element(by.css('dc-root .content span')).getText();
    }
}
//# sourceMappingURL=app.po.js.map