describe('Home page tests', () => {
  it('Loads the Home page', () => {
    cy.visit('/')
    cy.contains('Special Offer')
  })

  it('Displays the Special Offer message in an h1 element', () => {
    cy.visit('/')
    cy.get('h1').first().contains('Special Offer of the month 10% off all round-the-World flights')
  })  

  it('should show 5 rows in the table', () => {
    cy.visit('/')
    cy.get('table tbody tr').should('have.length',5)
  })    

  it('should show 0 rows in the table when toggle is clicked', () => {
    cy.visit('/')
    cy.get('#toggle').click()
    cy.get('table tbody tr').should('have.length',0)
  })     

  it("should show 8 columns in table", ()=> {
    cy.visit('/')
    cy.get('table tbody tr').first().find('td').should('have.length', 8);
  });   

  it("should show 8 columns in table (using then())", ()=> {
    cy.visit('/')
    cy.get('table tbody tr').then(rows => {
      assert(rows.first().find('td').length == 8);
    });
  });  
  
    it("should show FS2211 as the flight number for the 5th flight columns in table", ()=> {
    const ROW=5;
    const FLIGHT_NO_COL=1;
    cy.visit('/')
    cy.get(`table tbody tr:nth-child(${ROW}) td:nth-child(${FLIGHT_NO_COL})`).should('have.text', 'FS2211');
  });      
})
