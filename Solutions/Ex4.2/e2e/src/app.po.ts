import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getParagraphText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  async getAppHomeH1(): Promise<string> {
    return element(by.css('app-home h1')).getText();
  }

  async getNumTableRows(): Promise<number> {
    return (element.all(by.css('table tbody tr'))).count();
  }

  clickToggle(): void {
    element(by.css('#toggle')).click();
  }
}
