import { FlySharpCourseCheckPage } from './course-check.po';
import { browser, logging } from 'protractor';

describe('Validate exercise 8.1 bonus start', () => {
  let page: FlySharpCourseCheckPage;

  beforeEach(() => {
    page = new FlySharpCourseCheckPage();
  });


  it('should display message saying Special Offer of the month 10% off all round-the-World flights', async () => {
    await page.navigateTo();
    expect(await page.getParagraphText()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });
  it('should have an App-Home component', async () => {
    await page.navigateTo();
    expect(await page.getAppHomeH1()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });

  it('should have a nav element', async () => {
    await page.navigateTo();
    expect(await page.getNavBar().isPresent()).toBeTruthy();
  });

  it('should have an app-buy-flights element', async () => {
    await page.navigateToTab('buy');
    expect(await page.getBuyFlightsElement().isPresent()).toBeTruthy();
  });


  it('should have a 20 flights displayed', async () => {
    await page.navigateToTab('buy');

    expect(await page.getFlightTableRows()).toBe(20);
  });

  it('should show 9 columns in the table', async () => {
    await page.navigateToTab('buy');
    expect(await page.getNumTableCols()).toEqual(9);
  });

  it('flight number for 6th flight should be 114', async () => {
    await page.navigateToTab('buy');
    expect(await page.getTableCellData('5', '2')).toBe('114');
  });

  it('destination for 5th flight should be LHR', async () => {
    await page.navigateToTab('buy');
    expect(await page.getTableCellData('5', '4')).toBe('JFK');
  });

  it('should have a app-payment element when a flight is selected', async () => {
    await page.navigateToTab('buy');
    await page.clickBuyFlight();
    await browser.waitForAngular();
    expect(page.getPaymentElement().isPresent()).toBeTruthy();
  });

  it('should have a app-flight-filter element', async () => {
    await page.navigateToTab('buy');
    expect(await page.getFlightFilterElement().isPresent()).toBeTruthy();
  });


  it('should have a router-outlet', async () => {
    await page.navigateToTab('buy');
    expect(await page.getRouterOutlet().isPresent()).toBeTruthy();
  });

  it('The price column should contain USD', async () => {
    await page.navigateToTab('buy');
    expect(await page.getTableCellData('2', '9')).toContain('USD');
  });

  it('should have a Payment Component FORM when the buy button is pressed', async () => {
    await page.navigateToTab('buy');
    await page.clickBuyFlight();
    await browser.waitForAngular();
    expect(await page.getPaymentForm().isPresent()).toBeTruthy();
  });


  it('should have an input with a formcontrolname attribute when the buy button is pressed', async () => {
    await page.navigateToTab('buy');
    await page.clickBuyFlight();
    await browser.waitForAngular();
    expect(await page.getFormControlNameAttributeFromPaymentForm()).toBeTruthy();
  });

  /* Tests from here are checks that we have not accidentally got the solution from subsequent exercises */


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
