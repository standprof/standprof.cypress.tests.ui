import OurServicesPage from "./ourServicesPage";

class HomePage {
    visit() {
        cy.visit('https://standprof.co.uk')
    }
    
    containsTitle(title) {
        cy.get('h2').should('have.text', title)
    }
    
    viewOurServices()  {
        cy.get('a').contains('VIEW OUR SERVICES').click();
        return new OurServicesPage()
    }
}
export default HomePage