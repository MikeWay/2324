import { DoNow51Page } from './app.po';

import { browser, element, by, protractor } from 'protractor';

describe('do-now51 App', function() {
  let page: DoNow51Page;

  beforeEach(() => {
    page = new DoNow51Page();
  });

  it('should display message saying \'Pseudo Keys Example\'', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Pseudo Keys Example');
  });


  it('should echo input text to only two fields ', () => {
    let theText = "mary had a little";
    page.navigateTo();
    let input = page.getInputElement();
    input.sendKeys(theText);
     let elements = page.findElementsByTextContent(theText);
      expect(elements.count()).toEqual(2);   
  });  

  it('should echo input text to only two fields even if Enter is pressed ', () => {
    let theText = "mary had a little";
    page.navigateTo();
    let input = page.getInputElement();
    input.sendKeys(theText);
    input.sendKeys(protractor.Key.ENTER);
      let elements = page.findElementsByTextContent(theText);
      expect(elements.count()).toEqual(2);   
  });    
});
