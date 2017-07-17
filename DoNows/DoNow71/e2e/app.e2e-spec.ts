import { DoNow71Page } from './app.po';

describe('do-now71 App', function() {
  let page: DoNow71Page;

  beforeEach(() => {
    page = new DoNow71Page();
  });

  it('should display message saying Your Preferences', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Your Preferences');
  });
});
