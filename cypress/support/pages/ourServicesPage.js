class OurServicesPage {
    isOpened() {
        cy.get('h2').contains('OUR SERVICES').should('be.visible')
    }
}

export default OurServicesPage