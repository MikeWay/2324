import { KeyDemoPage } from './app.po';

describe('key-demo App', function() {
  let page: KeyDemoPage;

  beforeEach(() => {
    page = new KeyDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
