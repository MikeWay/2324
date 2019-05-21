import {FlySharpCourseCheckPage} from './course-check.po';
import { browser, logging } from 'protractor';

describe('Validate exercise 2.2 start', function() {
  let page: FlySharpCourseCheckPage;

  beforeEach(() => {
    page = new FlySharpCourseCheckPage();
  });

  it('should display message saying "Fly Sharp"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Fly Sharp');
  });

  it('should have an App-Home component', () => {
    page.navigateTo();
    expect(page.getAppHomeH1()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });  

  /* Tests from here are checks that we have not accidentally got the solution from subsequent exercises */

  it('should not have an app-buy-flight element', () => {

    page.navigateTo();
    expect(page.isBuyFlightElementPresent()).toBeFalsy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });  
});
