describe('Course Check - Ex6.2 Start', () => {
  it('should display message saying Special Offer of the month 10% off all round-the-World flights', () => {
    cy.visit('/');
    cy.contains('Special Offer of the month 10% off all round-the-World flights')
  })

  it('should have an App-Home component', () => {
    cy.visit('/');
    cy.get('app-home h1').should('have.text','Special Offer of the month 10% off all round-the-World flights');
  });  


  it('should have a nav element', () => {
    cy.visit('/');
    cy.get('app-root nav').should('be.visible');
  });  

  it('should have an app-buy-flights element', () => {
    cy.visit('/buy');
    cy.get('app-root app-buy-flight').should('be.visible');
  }); 

  it('should have a 5 flights displayed', () => {
    cy.visit('/buy');
    cy.get('app-buy-flight table tbody tr').should('have.length', 5);
  }); 



  it('should not have a populated app-payment element (until the Buy button is pressed)', () => {
    cy.visit('/buy');
    cy.get('app-root app-payment div').should('not.exist');
  }); 

  it('should have a app-payment element when a flight is selected', () => {
    cy.visit('/buy');
    cy.get('app-buy-flight table tr:nth-child(2) button:first-child').click();
    cy.get('app-root app-buy-flight app-payment div').should('be.visible');
  }); 



  it('should have a app-flight-filter element', () => {
    cy.visit('/buy');
    cy.get('app-buy-flight app-flight-filter').should('be.visible');
  });


  it('should have a router-outlet element', () => {
    cy.visit('/');
    cy.get('router-outlet').should('be.hidden'); // In the DOM but 0 x 0
  });  

  it('should not yet have any routerLink attributes', () => {
    cy.visit('/');
    cy.get('a[routerlink]').should('be.visible');
  });    

  // End positive tests for Ex6.2
  // Following tests are to verify that code has not been completed!   
/*
  it('should have a app-payment element when a flight is selected', async () => {
    await page.navigateToTab('buy');
    await page.clickBuyFlight();
    await browser.waitForAngular();
    expect(page.getPaymentElement().isPresent()).toBeTruthy();
  });
  */
})

/*
import { FlySharpCourseCheckPage } from './course-check.po';
import { browser, logging } from 'protractor';

/** ! IMPORTANT! These tests will run very slowly or fail due to the clock updates causing Protractor to fail to detect that Angular is stable
 * The only solution I have found so far is to add a flag to turn off the clock
*/
/*

  it('should not YET have an app-payment element when a flight is selected', () => {
    cy.visit('/');
    cy.get('app-buy-flight table tr:nth-child(2) button:first-child').click();
    cy.get('app-root app-payment').should('not.exist');
  }); 

    it('should show 9 columns in the table', async () => {
      await page.navigateToTab('buy');
      expect(await page.getNumTableCols()).toEqual(9);
    });
  
    it('flight number for 6th flight should be 114', async () => {
      await page.navigateToTab('buy');
      expect(await page.getTableCellData('5', '2')).toBe('114');
    });
  
    it('destination for 5th flight should be LHR', async () => {
      await page.navigateToTab('buy');
      expect(await page.getTableCellData('5', '4')).toBe('JFK');
    });
  
    it('should have a app-payment element when a flight is selected', async () => {
      await page.navigateToTab('buy');
      await page.clickBuyFlight();
      await browser.waitForAngular();
      expect(page.getPaymentElement().isPresent()).toBeTruthy();
    });
  
    it('should have a app-flight-filter element', async () => {
      await page.navigateToTab('buy');
      expect(await page.getFlightFilterElement().isPresent()).toBeTruthy();
    });
  
  
    it('should have a router-outlet', async () => {
      await page.navigateToTab('buy');
      expect(await page.getRouterOutlet().isPresent()).toBeTruthy();
    });
  
    it('The price column should contain USD', async () => {
      await page.navigateToTab('buy');
      expect(await page.getTableCellData('2', '9')).toContain('USD');
    });
  
    it('should have a Payment Component FORM when the buy button is pressed', async () => {
      await page.navigateToTab('buy');
      await page.clickBuyFlight();
      await browser.waitForAngular();
      expect(await page.getPaymentForm().isPresent()).toBeTruthy();
    });
  
  
    it('should have an input with a formcontrolname attribute when the buy button is pressed', async () => {
      await page.navigateToTab('buy');
      await page.clickBuyFlight();
      await browser.waitForAngular();
      expect(await page.getFormControlNameAttributeFromPaymentForm()).toBeTruthy();
    });
  
  
    it('should have a app-flight-status element', async () => {
      await page.navigateToTab('home');
      expect(await page.getFlightStatusElement().isPresent()).toBeTruthy();
    });
  
    /* Tests from here are checks that we have not accidentally got the solution from subsequent exercises */
  /*
    it('should not have elements containing AppTime', () => {
      expect(page.getElementContainingAppTime().isPresent()).toBeFalsy();
    });
  
  
    afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry));
    });
  });
  */


