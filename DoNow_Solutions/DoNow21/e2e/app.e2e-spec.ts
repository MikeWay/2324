import { DoNow21Page } from './app.po';

describe('do-now21 App', function() {
  let page: DoNow21Page;

  beforeEach(() => {
    page = new DoNow21Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
