import {FlySharpCourseCheckPage} from './course-check.po';

describe('Validate exercise 7.1 start', function() {
  let page: FlySharpCourseCheckPage;

  beforeEach(() => {
    page = new FlySharpCourseCheckPage();
  });

  it('should display message saying Special Offer of the month 10% off all round-the-World flights', () => {
    page.navigateToTab('home');
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
    page.navigateToTab('buy');
    expect(page.getBuyFlightsElement().isPresent()).toBeTruthy();
  });
      
  it('should have a Toggle Flights button', () => {
    page.navigateToTab('buy');

    expect(page.getToggleFlightsButtonText()).toEqual("Toggle Flights");
  });    

  it('should have a 0 flights displayed', () => {
    page.navigateToTab('buy');
    page.clickToggleFlights();
    expect(page.getFlightTableRows()).toBe(0);
  });    

  it('should have a 5 flights displayed', () => {
    page.navigateToTab('buy'); 
    expect(page.getFlightTableRows()).toBe(6);
  });      


  it('should have a router-outlet', () => {
   
    page.navigateTo();
    expect(page.getRouterOutlet().isPresent()).toBeTruthy();  

  });


  it('should have an h1 element with Special Offer on the home tab', () => {
    // There should not yet be a router so these should not change anything

    page.navigateToTab('home');
    expect(page.getAppHomeH1()).toContain("Special Offer");
  
  });

  it('should have an app-buy-flights element on the buy tab', () => {
    // There should not yet be a router so these should not change anything
    page.navigateToTab('buy');
    expect(page.getBuyFlightsElement().isPresent()).toBeTruthy();  
  });

  it('should not have an app-buy-flights element on the home tab', () => {
    // There should not yet be a router so these should not change anything
    page.navigateToTab('home');
    expect(page.getBuyFlightsElement().isPresent()).toBeFalsy();  
  });  

  it('should say my-flights works! on the My Flights tab', () => {
    // There should not yet be a router so these should not change anything
    page.navigateToTab('myflights');
    expect(page.getMyFlightsParagraphText()).toBe("my-flights works!");
    
  });   


  it('should say account works! on the Account tab', () => {
    // There should not yet be a router so these should not change anything
    page.navigateToTab('account');
    expect(page.getAccountParagraphText()).toBe("account works!");
    
  });  

   it('The price column should contain USD', () => {
    page.navigateToTab('buy');
    page.getTableCellData('1','8').then(value => console.log("===============>" + value));
    expect(page.getTableCellData('2','9')).toContain("USD");
  })    

  it('should have a Payment Component when the buy button is pressed', () => {
    page.navigateToTab('buy');
    page.clickBuyFlightButton();
    expect(page.getPaymentComponentElement().isPresent()).toBeTruthy();  
  });     

  
   
/* Tests from here are checks that we have not accidentally got the solution from subsequent exercises */

  it('should have NOT have a Payment Component FORM when the buy button is pressed', () => {
    page.navigateToTab('buy');
    page.clickBuyFlightButton();
    expect(page.getPaymentForm().isPresent()).toBeFalsy();  
  });

     


});