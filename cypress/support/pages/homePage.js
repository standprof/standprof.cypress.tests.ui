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

    sendEmail(name, emailAddress, details) {
        cy.get('[type = "text"]').first().type(name)
        cy.get('[type = "email"]').type(emailAddress)
        cy.get('[name = "Details"]').type(details)
        cy.get('.contact-form-submit-btn').click()
    }

    getThankYouMessage() {
        return cy.get('#contactFormResponseContainer')  
    }
}
export default HomePage