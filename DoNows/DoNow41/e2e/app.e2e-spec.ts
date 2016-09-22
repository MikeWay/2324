import { DoNow41Page } from './app.po';

describe('do-now41 App', function() {
  let page: DoNow41Page;

  beforeEach(() => {
    page = new DoNow41Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
