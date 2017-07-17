import { DoNow21Page } from './app.po';

describe('do-now21 App', () => {
  let page: DoNow21Page;

  beforeEach(() => {
    page = new DoNow21Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should not have an app-forecast element', () => {
    page.navigateTo();
    expect(page.getForecastElement().isPresent()).toBeFalsy();
  });  
});
