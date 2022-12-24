describe('DoNow41', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.title().should('eq', 'DoNow41');
  })
})