import { browser, element, by, ElementFinder } from 'protractor';

export class FlySharpCourseCheckPage {

  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async navigateToTab(tab: string): Promise<unknown> {
    return browser.get('/' + tab) as Promise<any>;
  }

  async getParagraphText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  async getAppHomeH1(): Promise<string> {
    return element(by.css('app-home h1')).getText();
  }

  getNavBar(): ElementFinder {
    return element(by.css('app-root nav'));
  }

  getBuyFlightsElement(): ElementFinder {
    return element(by.css('app-root app-buy-flight'));
  }

  getFlightFilterElement(): ElementFinder {
    return element(by.css('app-buy-flight app-flight-filter'));
  }

  async getToggleFlightsButtonText(): Promise<string> {
    return element(by.css('app-root app-buy-flight a')).getText();
  }

  async clickToggleFlights(): Promise<void> {
    element(by.css('app-root app-buy-flight a')).click();
  }

  async clickBuyFlight(): Promise<void> {
    element(by.css('app-buy-flight table tr:nth-child(2) button:first-child')).click();
  }

  async getFlightTableRows(): Promise<number> {
    return (element.all(by.css('app-buy-flight table tbody tr'))).count();
  }

  async getNumTableCols(): Promise<number> {
    return (element(by.css('table tbody tr:first-child')).all(by.css('td'))).count();
  }
  getPaymentElement(): ElementFinder {
    return element(by.css('app-root app-payment'));
  }

  async getTableCellData(row: string, col: string): Promise<string> {
    const query: string = 'table tr:nth-child(' + row + ') td:nth-child(' + col + ')';
    return element(by.css(query)).getText();
  }

  getRouterOutlet(): ElementFinder {
    return element(by.css('router-outlet'));
  }

  getPaymentForm(): ElementFinder {
    return element(by.css('app-payment form'));
  }

  async getNGControlAttributeFromPaymentForm(): Promise<string> {
    return element(by.css('app-payment form input')).getAttribute('ngcontrol');
  }

  async getFormControlNameAttributeFromPaymentForm(): Promise<string> {
    return element(by.css('app-payment form input')).getAttribute('formcontrolname');
  }

  getFlightStatusElement(): ElementFinder {
    return element(by.css('app-flight-status'));
  }

  getElementContainingAppTime(): ElementFinder {
    return element(by.css('[appTime]'));
  }
}
