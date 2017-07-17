import { browser, element, by } from 'protractor';

export class DoNow91Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }


  getFormEleWithStyle(){
    // Animation adds a style element
    return element(by.xpath("//form[@style]"));
    
  }  
}
