import { browser, element, by } from 'protractor';

export class DoNow51Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getInputElement(){
    return element(by.css('input'));
  }

  findElementsByTextContent(theText){
    return element.all(by.xpath("//*[contains(text(),'" + theText + "')]"));
    
  }

  findPElements(){
    return element.all(by.xpath("//P"));
    
  }  
}
