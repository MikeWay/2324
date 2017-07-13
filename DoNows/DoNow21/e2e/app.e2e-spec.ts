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
});
