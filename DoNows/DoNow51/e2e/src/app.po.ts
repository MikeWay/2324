import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getInputElement(){
    return element(by.css('#userInput'));
  }

  getOutputAllText(){
    return element(by.css('#outputAll span')).getText() as Promise<string>;
  }
  
  getOutputEnterText(){
    return element(by.css('#outputEnter span')).getText() as Promise<string>;
  }
  
}
