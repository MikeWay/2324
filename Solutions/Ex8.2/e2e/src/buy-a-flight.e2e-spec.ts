import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { protractor } from 'protractor/built/ptor';

/**
 * The tests will all fail because of the AppTime directive -- the every changing clock stops Protractor seeing the page as stable!
 */
describe('buy flight use-case', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /**
   * Use case to simulate
   * User selects origin and destination - check that a list of appropriate flights is displayed
   * User selects one of the flights - check that the payment form is displayed
   * User completes the payment form - check that a confirmation is displayed
   */
  it('should navigate to the buy tab', () => {
    page.navigateToTab('buy');
    // Crude test that we have the flights table displayed!
    expect(page.getNumTableRows()).toBeGreaterThan(1);
  });

  // NB: This test will fail initially - get them to add an ngIf into the app-payment element in buy-flight.component.html
  it('should not show the payment component until a flight is selected', () => {
    page.navigateToTab('buy');

    expect(page.isPaymentComponentPresent()).toBeFalsy(); // WARNING: toBeFalse() is not an available function here!

  });


  it('should show the payment component when a flight is selected', () => {
    page.navigateToTab('buy');

    page.clickBuyOnFirstFlight();
    expect(page.isPaymentComponentPresent()).toBeTruthy();

  });

  it('should show flight FS1298 in payment when the first flight is selected', () => {
    page.navigateToTab('buy');

    page.clickBuyOnFirstFlight();
    expect(page.getPaymentComponentText()).toContain('FS1298');

  });

  it('should show an alert when the form is submitted', async () => {
    page.navigateToTab('buy');

    page.clickBuyOnFirstFlight();
    await page.populateFormElement('name', 'Mike');
    await page.populateFormElement('address', 'My Address');
    await page.populateFormElement('email', 'me@me.com');
    await page.populateFormElement('cardNum', '1234567890123456');
    await page.selectCardType('VISA');
    await page.populateFormElement('expDate', protractor.Key.ARROW_UP + protractor.Key.ARROW_RIGHT + protractor.Key.ARROW_UP);
    await page.clickBuyFlightButton();
    expect(page.getAlertText()).toContain('me@me.com');

  });



});
