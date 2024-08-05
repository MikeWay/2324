describe('Course Check - Ex9.2 Start', () => {
  it('should display message saying Special Offer of the month 10% off all round-the-World flights', () => {
    cy.visit('/');
    cy.contains('Special Offer of the month 10% off all round-the-World flights')
  })

  it('should have an App-Home component', () => {
    cy.visit('/');
    cy.get('app-home h1').should('have.text','Special Offer of the month 10% off all round-the-World flights');
  });  


  it('should have a nav element', () => {
    cy.visit('/');
    cy.get('app-root nav').should('be.visible');
  });  

  it('should have an app-buy-flights element', () => {
    cy.visit('/buy');
    cy.get('app-root app-buy-flight').should('be.visible');
  }); 

  it('should have a 20 flights displayed', () => {
    cy.visit('/buy');
    cy.get('app-buy-flight table tbody tr').should('have.length', 20);
  }); 



  it('should have a populated app-payment element ', () => {
    cy.visit('/buy');
    cy.get('app-root app-payment div').should('be.visible');
  }); 

  it('should have a app-payment element when a flight is selected', () => {
    cy.visit('/buy');
    cy.get('app-buy-flight table tr:nth-child(2) button:first-child').click();
    cy.get('app-root app-buy-flight app-payment div').should('be.visible');
  }); 



  it('should have a app-flight-filter element', () => {
    cy.visit('/buy');
    cy.get('app-buy-flight app-flight-filter').should('be.visible');
  });


  it('should have a router-outlet element', () => {
    cy.visit('/');
    cy.get('router-outlet').should('be.hidden'); // In the DOM but 0 x 0
  });  

  it('should have routerLink attributes', () => {
    cy.visit('/');
    cy.get('a[routerlink]').should('be.visible');
  });    

  it('should have a form element in app-payment', () => {
    cy.visit('/buy');
    cy.get('app-payment form').should('be.visible');
  });

  it('should not have ngModel bindings app-payment form', () => {
    cy.visit('/buy');
    cy.get('app-payment form input[ng-reflect-model]').should('not.exist');
  });  

  it('should have formControlName bindings in app-payment form', () => {
    cy.visit('/buy');
    cy.get('app-payment form input[formControlName]').should('be.visible');
  });

  it('should have a formGroup binding in app-payment form', () => {
    cy.visit('/buy');
    cy.get('app-payment form[ng-reflect-form]').should('be.visible');
  }); 
  
  it('should have an app-flight-status element on the home page', () => {
    cy.visit('/');
    cy.get('app-home app-flight-status').should('be.visible');
  });   

  it('should have an appTime element on the home page', () => {
    cy.visit('/');
    cy.get('span[apptime]').should('be.visible');
  });  
  
  // End positive tests for Ex9.2
  // Following tests are to verify that code has not been completed!   

  it('should not yet have a mat-toolbar element on the home page', () => {
    cy.visit('/');
    cy.get('mat-toolbar').should('not.exist');
  }); 
})


