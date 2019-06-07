import {FlySharpCourseCheckPage} from './course-check.po';

describe('Validate DoNow 2.2 start', function() {
  let page: FlySharpCourseCheckPage;

  beforeEach(() => {
    page = new FlySharpCourseCheckPage();
  });

  it('should display message saying DoNow22', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('DoNow22');
  });

  it('should not have a Forecast component', () => {
    page.navigateTo();
    expect(page.getAppForecast().count()).toBe(0);
  });  
});
