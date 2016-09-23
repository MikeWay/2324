import { DoNow51Page } from './app.po';

describe('do-now51 App', function() {
  let page: DoNow51Page;

  beforeEach(() => {
    page = new DoNow51Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
