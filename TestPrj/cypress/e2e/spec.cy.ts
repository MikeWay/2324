describe('My First Test', () => {

  // beforeEach(()=>{    
  //   cy.request('DELETE', 'http://localhost:8080/flightserver/myflights' ); // Delete any flights held in myFlights
  // });  

  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('app is running!')
  })

  it('Visits the buy flights page', () => {
    cy.visit('/buy/');
    cy.get('table').should('exist');
    cy.get('app-flight-filter').should('exist');
  });

})
