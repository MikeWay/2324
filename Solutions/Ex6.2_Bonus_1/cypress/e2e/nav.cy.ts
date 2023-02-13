describe('Navigation between pages of FlySharp App', () => {

    it('Visits the Home page', () => {
        cy.visit('/')
        cy.contains('Special Offer')
    })    

    it('Has 4 top-level navigation links', () => {
        cy.visit('/');
        cy.get('a[class="nav-link"]').should('exist').should('have.length', 4);
    });    

    it('Visits the Buy Flights page when the link is clicked', () => {
        cy.visit('/');
        cy.get('a[href="/buy"]').contains('Buy Flights').should('exist').click(); // Click the Buy Flights Link
        cy.get('app-flight-filter').should('exist');
      });   
      
      it('Visits the My Flights page when the link is clicked', () => {
        cy.visit('/');
        cy.get('a[href="/myflights"]').contains('My Flights').should('exist').click(); // Click the MyFlights Link
        cy.contains('my-flights works');
      });  
  
      it('Visits the Accounts page when the link is clicked', () => {
        cy.visit('/');
        cy.get('a[href="/account"]').contains('Account').should('exist').click(); // Click the Account Link
        cy.contains('account works');
      });        
});