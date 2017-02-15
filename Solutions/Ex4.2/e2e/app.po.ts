import { browser, element, by } from 'protractor';

export class FlySharpPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getNumTableRows() {
    return (element.all(by.css('table tbody tr'))).count();
  }

  clickToggle() {
    element(by.css('#toggle')).click();
  }
}
