import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  async getNumTableRows(): Promise<number>  {
    return (element.all(by.css('table tbody tr'))).count();
  }

  async getNumTableCols(): Promise<number> {
    return (element(by.css('table tbody tr')).all(by.css('td'))).count();
  }

  async clickToggle(): Promise<void> {
    return element(by.css('#toggle')).click();
  }

  async getTableCellData(row: string, col: string): Promise<string> {
    const query: string = 'table tr:nth-child(' + row + ') td:nth-child(' + col + ')';
    console.log('QUERY: ' + query);
    return element(by.css(query)).getText();
  }
}
