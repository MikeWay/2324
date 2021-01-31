import { browser, element, by, ElementFinder } from 'protractor';

export class FlySharpCourseCheckPage {

  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getParagraphText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  async getAppHomeH1(): Promise<string> {
    return element(by.css('app-home h1')).getText();
  }

  getNavBar(): ElementFinder{
    return element(by.css('app-root nav'));
  }

  getBuyFlightsElement(): ElementFinder {
    return element(by.css('app-root app-buy-flight'));
  }

  async getToggleFlightsButtonText(): Promise<string> {
    return element(by.css('app-root app-buy-flight a')).getText();
  }

  async clickToggleFlights(): Promise<void> {
    element(by.css('app-root app-buy-flight a')).click();
  }

  async getFlightTableRows(): Promise<number> {
    return (element.all(by.css('app-buy-flight table tbody tr'))).count();
  }

}
