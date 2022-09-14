describe('DoNow81', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.title().should('eq', 'DoNow81');
  })

  it('should display Generators', ()=>{
    cy.visit('/');
    cy.contains('Generators');
  })  
})