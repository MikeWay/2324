import { DoNow51Page } from './app.po';

describe('do-now51 App', function() {
  let page: DoNow51Page;

  beforeEach(() => {
    page = new DoNow51Page();
  });

  it('should display message saying \'Pseudo Keys Example\'', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Pseudo Keys Example');
  });


  // it('should echo input text to only two fields ', () => {
  //   let theText = "mary had a little";
  //   page.navigateTo();
  //   let input = page.getInputElement();
  //   input.sendKeys(theText);
    
  //   /*.then(()=>{
  //     let elements = page.findElementsByTextContent(theText);
  //     console.log(elements.getSize());
  //     expect(elements.size()).toEqual(2);
  //   })*/
  //     let elements = page.findElementsByTextContent(theText);
  //     let x = elements.getSize();
  //     expect(elements.size()).toEqual(2);
    
  // });  
});
