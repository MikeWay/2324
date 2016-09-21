export class WeatherPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }


  isOtherButtonEnabled() {
    return element(by.css('#magicButton')).isEnabled();
  }


 clickUpdateWeatherButton() {
   element(by.css('#updateButton')).click();
}
}
