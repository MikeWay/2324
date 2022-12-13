describe('Basic Operation of FlySharp App', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Special Offer')
  })

  it('Visits the buy flights page', () => {
    cy.visit('/buy/')
    cy.get('table').should('exist')
    cy.get('app-flight-filter').should('exist')
  })  

  it('Should show 20 flights in the flights table', () => {
    cy.visit('/buy/')
    cy.get('table')
    cy.get('app-flight-filter').should('exist')
  })  


  it("should show 20 rows in table ", ()=> {
    cy.visit('/buy/')
    cy.get('table tbody tr').should('have.length', 20)
  });  

  it("should show the payment form when a Buy button is pressed", ()=> {
    cy.visit('/buy/')
    cy.get(`table tbody tr:nth-child(2)`).find('button').click();    
    cy.get('app-payment').should('exist')
  });    

  it("should display myFlights when a flight is purchased", ()=> {
    cy.visit('/buy/')
    cy.get(`table tbody tr:nth-child(2)`).find('button').click();    
    cy.get('#expDate').should('be.visible').type('2099-01-01');
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click();
    cy.url().should('match', /myflights/);
  });    

  it("should add a second flight when it is purchased", ()=> {
    cy.visit('/buy/')
    cy.get(`table tbody tr:nth-child(2)`).find('button').click();    
    cy.get('#expDate').should('be.visible').type('2099-01-01');
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click();
    cy.url().should('match', /myflights/);
    cy.get('a[href="/buy"]').should('exist').click();
    cy.get(`table tbody tr:nth-child(3)`).find('button').click();
    cy.get('#expDate').should('be.visible').type('2099-01-01');
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click();    
    cy.url().should('match', /myflights/);  
    cy.get('table tbody tr').should('exist').should('have.length', 2)
  });

})
