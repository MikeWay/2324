import {FlySharpCourseCheckPage} from './course-check.po';
import { browser, logging } from 'protractor';

describe('Validate exercise 2.1 start', () => {
    let page: FlySharpCourseCheckPage;

    beforeEach(() => {
      page = new FlySharpCourseCheckPage();
    });

    it('should display message saying "Fly Sharp"', async () => {
      await page.navigateTo();
      expect(await page.getParagraphText()).toEqual('Fly Sharp');
    });

    it('should have an App-Home component', async () => {
      await page.navigateTo();
      expect(await page.getAppHomeH1()).toEqual('Special Offer of the month 10% off all round-the-World flights');
    });

    afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry));
    });
  });
