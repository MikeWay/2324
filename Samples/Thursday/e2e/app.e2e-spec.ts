import { ThursdayPage } from './app.po';

describe('thursday App', function() {
  let page: ThursdayPage;

  beforeEach(() => {
    page = new ThursdayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
