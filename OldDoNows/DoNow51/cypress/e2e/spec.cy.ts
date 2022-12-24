describe('DoNow 51', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.title().should('eq', 'DoNow51');
  })
})