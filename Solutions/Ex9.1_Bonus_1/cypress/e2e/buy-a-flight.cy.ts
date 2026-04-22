describe('Verify the flight purchase process', () => {

    it('Loads the buy-flights page', () => {
        cy.visit('/buy/');
        cy.get('app-buy-flight').should('exist');
    }) 

    it("should show some rows in table ", ()=> {
        cy.visit('/buy/');
        cy.get('table tr').should('have.length.gt', 2);
      });      

    it("should show the payment form when a Buy button is pressed", ()=> {
        cy.visit('/buy/');
        cy.get(`table tr:nth-child(2)`).find('button').click();    
        cy.get('app-payment').should('exist');
      });  
      
      it("should show the payment form when a Buy button is pressed", ()=> {
        cy.visit('/buy/');
        cy.get(`table  tr:nth-child(2)`).find('button').click();    
        cy.get('app-payment').should('exist');
      });       
});