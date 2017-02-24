import {FlySharpCourseCheckPage} from './course-check.po';

describe('Validate exercise 2.2 start', function() {
  let page: FlySharpCourseCheckPage;

  beforeEach(() => {
    page = new FlySharpCourseCheckPage();
  });

  it('should display message saying Welcome to Fly Sharp', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Fly Sharp');
  });

  it('should have an App-Home component', () => {
    page.navigateTo();
    expect(page.getAppHomeH1()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });  
});
