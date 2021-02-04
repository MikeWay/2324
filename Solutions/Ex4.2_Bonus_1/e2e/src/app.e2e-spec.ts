import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('should display message saying "Special Offer of the month 10% off all round-the-World flights"', async () => {
    await page.navigateTo();
    expect(await page.getParagraphText()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });

  it('should have an App-Home component', async () => {
    await page.navigateTo();
    expect(await page.getAppHomeH1()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });

  it('should show 5 rows in the table', async () => {
    await page.navigateTo();
    expect(await page.getNumTableRows()).toEqual(5);
  });

  it('should show 0 rows in the table when toggle is clicked', async () => {
    await page.navigateTo();
    page.clickToggle();
    await browser.waitForAngular();
    expect(await page.getNumTableRows()).toEqual(0);
  });

  it('should show 8 columns in the table', async () => {
    await page.navigateTo();
    expect(await page.getNumTableCols()).toEqual(8);
  });

  it('flight number for 5th flight should be FS2211', async () => {
    await page.navigateTo();
    expect(await page.getTableCellData('5', '1')).toBe('FS2211');
  });

  it('destination for 5th flight should be LHR', async () => {
    await page.navigateTo();
    expect(await page.getTableCellData('5', '3')).toBe('LHR');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
