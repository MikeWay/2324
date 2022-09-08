describe('Course Check - Ex4.2 Start', () => {
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
    cy.visit('/');
    cy.get('app-root app-buy-flight').should('be.visible');
  }); 

  // End positive tests for Ex3.1
  // Following tests are to verify that code has not been completed!

  it('should have a 5 flights displayed', () => {
    cy.visit('/');
    //cy.get('app-root app-buy-flight a').click();
    cy.get('app-buy-flight table tbody tr').should('have.length', 5);
  }); 


})
