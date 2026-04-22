describe('Home Page Test', () => {
  it('Loads the Home page', () => {
    cy.visit('/');
    cy.contains('Special Offer');
  });

  it('Displays the Special Offer message in an h1 element', () => {
    cy.visit('/');
    cy.get('h1').contains('Special Offer of the month 10% off all round-the-World flights');
  })  
});
