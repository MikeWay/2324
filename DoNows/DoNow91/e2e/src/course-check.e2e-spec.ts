/**
 * Suite of tests to verify that the exercises have not been completed!
 */
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should not have a class with the word "myanimate" in it', async ()=>{
    
    page.navigateTo();
    let classes = await page.getFormClasses();
    expect(classes.includes('myanimate')).toBeFalsy();
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
