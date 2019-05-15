import { browser, element, by } from 'protractor';

export class FlySharpCourseCheckPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAppForecast(){
    return element.all(by.css('app-forecast'));
  }
}
