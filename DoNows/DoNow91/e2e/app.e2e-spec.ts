import { DoNow91Page } from './app.po';

describe('do-now91 App', function() {
  let page: DoNow91Page;

  beforeEach(() => {
    page = new DoNow91Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
