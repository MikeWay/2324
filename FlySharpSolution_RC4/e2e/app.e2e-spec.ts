import { FlySharpSolutionPage } from './app.po';

describe('fly-sharp-solution App', function() {
  let page: FlySharpSolutionPage;

  beforeEach(() => {
    page = new FlySharpSolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
