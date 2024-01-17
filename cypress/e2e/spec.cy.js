/*
Software QA Engineer Internship at Present Connection 
Technical assignment
*/
describe('Wolt spec', () => {
  it('passes', () => {
    // Navigates to Wolt.com website:
    cy.visit('https://wolt.com/en/ltu')
    // Accepts all cookies:
    cy.contains('Accept').click()

    // Navigates to page about food selection after selecting Kauno Dokas as delivery address
    cy.get('#front-page-input').type('Kauno Dokas')
    cy.wait(2000)
    cy.get('#front-page-input').type('{enter}')

    cy.contains('Restaurants').click({ force: true })
    cy.contains('Burger').click()

    // Select Burger by link of the photo (desired burger is McPlant®):
    cy.get('a[data-test-id="venueCard.mcdonalds-karaliaus-mindaugo-pr"]').click({ force: true })
    cy.get('img[srcset^="https://imageproxy.wolt.com/menu/menu-images/5e4fe1ba611cf21fd66c89df/e5171fe0-af2c-11ee-a400-2a49adcbe6f9_wlt_2170.jpg"]').click({ force: true })
    
    // Checks if the order is correct:

    cy.contains('Add to order').click()
    cy.contains('View order').click()

    cy.get('.sc-c32fca60-14[data-test-id="CartItem"]').find('img').should('have.attr', 'src', 'https://imageproxy.wolt.com/menu/menu-images/5e4fe1ba611cf21fd66c89df/e5171fe0-af2c-11ee-a400-2a49adcbe6f9_wlt_2170.jpg')    
    
    // All the next actions that can be done before paying for the order: 
    cy.contains('Go to checkout').click()
    cy.get('#method-select-email').type('fake@email.com')
    cy.contains('Next').click()

  })

})