import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  getNumTableRows() {
    return (element.all(by.css('table tbody tr'))).count();
  }

  clickToggle() {
    element(by.css('#toggle')).click();
  }
}
