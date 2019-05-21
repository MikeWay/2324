import { browser, element, by } from 'protractor';

export class FlySharpCourseCheckPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAppHomeH1(){
    return element(by.css('app-home h1')).getText();
  }

  isBuyFlightElementPresent(){
    return browser.isElementPresent(by.css('app-buy-flight'));
  }
 
}
