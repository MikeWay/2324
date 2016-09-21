import { WeatherPage } from './app.po';
//import {verifyNoBrowserErrors} from '@angular/platform-browser/testing_e2e';

describe('weather App', function() {
  let page: WeatherPage;

  beforeEach(() => {
    page = new WeatherPage();
  });

  //afterEach(verifyNoBrowserErrors);

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('should fire an event when the update weather button is pressed', () => {
    page.navigateTo();
    expect(page.isOtherButtonEnabled()).toBe(false);

  });

  it('should have an initial other button state of disabled', () => {
    page.navigateTo();
    page.clickUpdateWeatherButton();
    browser.waitForAngular();
    expect(page.isOtherButtonEnabled()).toBe(true);
  });
});


