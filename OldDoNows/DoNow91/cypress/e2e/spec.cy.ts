describe('DoNow91', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.title().should('eq', 'DoNow91');
  })

  it('should not have a clas called myanimate', ()=>{
    cy.visit('/');
    cy.get('form[class]').should('not.contain.text', 'myanimate');
  })  
})