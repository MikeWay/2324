describe('Navigation between pages of FlySharp App', () => {
    it('Loads  the Home page', () => {
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

    it('Has 5 rows in the table on the Buy Flights page', () => {
        cy.visit('/')
        cy.get('a[href="/buy"]').click();
        cy.get('table tbody tr').should('have.length', 5);
    })      

    it('Visits the My Flights page when the link is clicked', () => {
        cy.visit('/');
        cy.get('a[href="/myflights"]').contains('My Flights').should('exist').click(); // Click the MyFlights Link
        cy.contains('My Flights will be loaded here');
    });

    it('Visits the Accounts page when the link is clicked', () => {
        cy.visit('/');
        cy.get('a[href="/account"]').contains('Account').should('exist').click(); // Click the Account Link
        cy.contains('account works');
    });

  
});