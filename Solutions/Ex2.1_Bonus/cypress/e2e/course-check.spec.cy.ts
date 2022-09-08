describe('Course Check - Ex2.2 Start', () => {
  it('should display message saying Special Offer of the month 10% off all round-the-World flights', () => {
    cy.visit('/');
    cy.contains('Special Offer of the month 10% off all round-the-World flights')
  })

  it('should have an App-Home component', () => {
    cy.visit('/');
    cy.get('app-home h1').should('have.text','Special Offer of the month 10% off all round-the-World flights');
  });  

  // End positive tests for Ex2.2
  // Following tests are to verify that code has not been completed!
  it('should NOT YET have a nav element', () => {
    cy.visit('/');
    //cy.get('app-root nav').should('be.visible');
    cy.get('app-root nav').should('not.exist');
  });  

  it('should NOT YET have an app-buy-flights element', () => {
    cy.visit('/');
    //cy.get('app-root app-buy-flight').should('be.visible');
    cy.get('app-root app-buy-flight').should('not.exist');
  }); 

})
