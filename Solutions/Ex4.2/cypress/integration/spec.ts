describe('Home page tests', () => {
  it('Loads the Home page', () => {
    cy.visit('/');
    cy.contains('Special Offer');
  });

  it('Displays the Special Offer message in an h1 element', () => {
    cy.visit('/');
    cy.get('h1').contains('Special Offer of the month 10% off all round-the-World flights');
  });

  it('should show 5 rows in the table', () => {
    cy.visit('/')
    cy.get('table tbody tr').should('have.length', 5);
  });  

  it("should show 0 rows in the table when toggle is clicked", ()=> {
    cy.visit('/')
    cy.get('#toggle').click();
    cy.get('table tbody tr').should('have.length', 0);
  });  
})
