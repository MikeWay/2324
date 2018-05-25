import {FlySharpCourseCheckPage} from './course-check.po';

describe('Validate exercise 6.1 start', function() {
  let page: FlySharpCourseCheckPage;

  beforeEach(() => {
    page = new FlySharpCourseCheckPage();
  });

  it('should display message saying Special Offer of the month 10% off all round-the-World flights', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });

  it('should have an App-Home component', () => {
    page.navigateTo();
    expect(page.getAppHomeH1()).toEqual('Special Offer of the month 10% off all round-the-World flights');
  });  

  it('should have a nav element', () => {
    page.navigateTo();
    expect(page.getNavBar().isPresent()).toBeTruthy();
  });   

  it('should have an app-buy-flights element', () => {
    page.navigateTo();
    expect(page.getBuyFlightsElement().isPresent()).toBeTruthy();
  });
      
  it('should have a Toggle Flights button', () => {
    page.navigateTo();

    expect(page.getToggleFlightsButtonText()).toEqual("Toggle Flights");
  });    

  it('should have a 0 flights displayed', () => {
    page.navigateTo();
    page.clickToggleFlights();
    expect(page.getFlightTableRows()).toBe(0);
  });    

  it('should have a 5 flights displayed', () => {
    page.navigateTo();   
    expect(page.getFlightTableRows()).toBe(6);
  });      

/* Tests from here are checks that we have not accidentally got the solution from subsequent exercises */

 

  it('should have an app-buy-flights element on all tabs', () => {
    // There should not yet be a router so these should not change anything
    page.navigateToTab('buy');
    expect(page.getBuyFlightsElement().isPresent()).toBeTruthy();
    page.navigateToTab('home');
    expect(page.getBuyFlightsElement().isPresent()).toBeTruthy();
    page.navigateToTab('account');
    expect(page.getBuyFlightsElement().isPresent()).toBeTruthy();
    page.navigateToTab('myflights');
    expect(page.getBuyFlightsElement().isPresent()).toBeTruthy();
    
  });

  it('should NOT have a router-outlet', () => {
   
    page.navigateTo();
    expect(page.getRouterOutlet().isPresent()).toBeFalsy();  

  });
});