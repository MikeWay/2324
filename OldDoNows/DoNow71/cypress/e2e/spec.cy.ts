describe('DoNow71', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.title().should('eq', 'DoNow71');
  })

  it('should not have a pre element', ()=>{
    cy.visit('/');
    cy.get('pre').should('not.exist');
  })  
})