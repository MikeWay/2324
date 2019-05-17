import {FlySharpCourseCheckPage} from './course-check.po';
import { browser, logging } from 'protractor';

describe('Validate exercise 4.2 start', function() {
  let page: FlySharpCourseCheckPage;

  beforeEach(() => {
    page = new FlySharpCourseCheckPage();
  });


  it('should display message saying Special Offer of the month 10% off all round-the-World flights', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });
  it('should have an App-Home component', () => {
    page.navigateTo();
    expect(page.getAppHomeH1()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });

  it('should have a nav element', () => {
    page.navigateTo();
    expect(page.getNavBar().isPresent()).toBeTruthy();
  });

  it('should have an app-buy-flights element', () => {
    page.navigateTo();
    expect(page.getBuyFlightsElement().isPresent()).toBeTruthy();
  });
  it('should have a Toggle Flights button', () => {
    page.navigateTo();

    expect(page.getToggleFlightsButtonText()).toEqual('Toggle Flights');
  });

  it('should have a 5 flights displayed', () => {
    page.navigateTo();

    expect(page.getFlightTableRows()).toBe(5);
  });

  it('should have a 0 flights displayed when flight toggle is clicked', () => {
    page.navigateTo();
    page.clickToggleFlights();
    expect(page.getFlightTableRows()).toBe(0);
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
