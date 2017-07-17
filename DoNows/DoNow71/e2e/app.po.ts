import { browser, element, by } from 'protractor';

export class DoNow71Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPreElement() {
    return element(by.css('pre'));
  }  
}
