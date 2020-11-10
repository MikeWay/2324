import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

/**
 * The tests will all fail because of the AppTime directive -- the every changing clock stops Protractor seeing the page as stable!
 */
describe('workspace-project App', () => {
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
    expect(page.getTitleText()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });

});
