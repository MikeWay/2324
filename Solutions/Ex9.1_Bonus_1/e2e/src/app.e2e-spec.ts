import { FlySharpPage } from './app.po';
import { browser } from 'protractor';

describe('fly-sharp App', function() {
  let page: FlySharpPage;

  beforeEach(() => {
    page = new FlySharpPage();
    // The time directive causes the waitForAngular function to fail! 
    // This is a work-around. IMHO: it's dangerous
    browser.waitForAngularEnabled(false);
  });

  it('should display message saying Special Offer of the month 10% off all round-the-World flights', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });

  it('should show 20 rows in the table', () => {
    page.navigateToTab('buy');
    expect(page.getNumTableRows()).toEqual(20);
  });


  // it('should show 0 rows in the table when toggle is clicked', () => {
  //   page.navigateToTab('buy');
  //   page.clickToggle();
  //   expect(page.getNumTableRows()).toEqual(0);
  // });

  it('should show 9 columns in the table', () => {
    page.navigateToTab('buy');
    expect(page.getNumTableCols()).toEqual(9);
  });  

  it('flight number for 5th flight should be 114', () => {
    page.navigateToTab('buy');
    expect(page.getTableCellData('5','2')).toBe("114");
  })

  it('destination for 5th flight should be JFK', () => {
    page.navigateToTab('buy');
    expect(page.getTableCellData('5','4')).toBe("JFK");
  })  
});
