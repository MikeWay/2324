import { LifeCyclePage } from './app.po';

describe('life-cycle App', function() {
  let page: LifeCyclePage;

  beforeEach(() => {
    page = new LifeCyclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
