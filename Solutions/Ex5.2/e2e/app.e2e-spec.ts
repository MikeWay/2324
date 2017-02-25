import { FlySharpPage } from './app.po';

describe('fly-sharp App', function() {
  let page: FlySharpPage;

  beforeEach(() => {
    page = new FlySharpPage();
  });

  it('should display message saying Special Offer of the month 10% off all round-the-World flights', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });

  it('should show 5 rows in the table', () => {
    page.navigateTo();
    expect(page.getNumTableRows()).toEqual(5);
  });


  it('should show 0 rows in the table when toggle is clicked', () => {
    page.navigateTo();
    page.clickToggle();
    expect(page.getNumTableRows()).toEqual(0);
  });

  it('should show 9 columns in the table', () => {
    page.navigateTo();
    expect(page.getNumTableCols()).toEqual(9);
  });  

  it('flight number for 5th flight should be FS2211', () => {
    page.navigateTo();
    expect(page.getTableCellData('5','2')).toBe("FS2211");
  })

  it('destination for 5th flight should be LHR', () => {
    page.navigateTo();
    expect(page.getTableCellData('5','4')).toBe("LHR");
  })  
});
