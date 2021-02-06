import { FlySharpCourseCheckPage } from './course-check.po';
import { browser, logging } from 'protractor';

describe('Validate exercise 7.2 start', () => {
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
  it('should have a Toggle Flights button', async () => {
    await page.navigateToTab('buy');

    expect(await page.getToggleFlightsButtonText()).toEqual('Toggle Flights');
  });

  it('should have a 5 flights displayed', async () => {
    await page.navigateToTab('buy');

    expect(await page.getFlightTableRows()).toBe(5);
  });

  it('should have a 0 flights displayed when flight toggle is clicked', async () => {
    await page.navigateToTab('buy');
    await page.clickToggleFlights();
    await browser.waitForAngular();
    expect(await page.getFlightTableRows()).toBe(0);
  });
  it('should show 9 columns in the table', async () => {
    await page.navigateToTab('buy');
    expect(await page.getNumTableCols()).toEqual(9);
  });

  it('flight number for 6th flight should be FS2211', async () => {
    await page.navigateToTab('buy');
    expect(await page.getTableCellData('5', '2')).toBe('FS2211');
  });

  it('destination for 5th flight should be LHR', async () => {
    await page.navigateToTab('buy');
    expect(await page.getTableCellData('5', '4')).toBe('LHR');
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

  /* Tests from here are checks that we have not accidentally got the solution from subsequent exercises */

  it('should not have an input with a ngcontrol attribute when the buy button is pressed', async () => {
    await page.navigateToTab('buy');
    await page.clickBuyFlight();
    await browser.waitForAngular();
    expect(await page.getNGControlAttributeFromPaymentForm()).toBeFalsy();
  });

  it('should not have an input with a formcontrolname attribute when the buy button is pressed', async () => {
    await page.navigateToTab('buy');
    await page.clickBuyFlight();
    await browser.waitForAngular();
    expect(await page.getFormControlNameAttributeFromPaymentForm()).toBeFalsy();
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
