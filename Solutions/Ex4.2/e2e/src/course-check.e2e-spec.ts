import {FlySharpCourseCheckPage} from './course-check.po';
import { browser, logging } from 'protractor';

describe('Validate exercise 4.2_Bonus start', () => {
    let page: FlySharpCourseCheckPage;

    beforeEach(() => {
      page = new FlySharpCourseCheckPage();
    });

    it('should display message saying "Special Offer of the month 10% off all round-the-World flights"', async () => {
      await page.navigateTo();
      expect(await page.getParagraphText()).toEqual('Special Offer of the month 10% off all round-the-World flights');
    });

    it('should have an App-Home component', async () => {
      await page.navigateTo();
      expect(await page.getAppHomeH1()).toEqual('Special Offer of the month 10% off all round-the-World flights');
    });

    it('should have 5 flights displayed ', async () => {
      await page.navigateTo();
      expect(await page.getFlightTableRows()).toBe(5);
    });

    it('should have 0 flights displayed when flight toggle is clicked', async () => {
      await page.navigateTo();
      await page.clickToggleFlights();
      await browser.waitForAngular();
      expect(await page.getFlightTableRows()).toBe(0);
    });

    afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry));
    });
  });
