/// <reference types="cypress" />
import HomePage from '../../support/pages/homePage'

describe('Home page', () => {
    const homePage = new HomePage()

    beforeEach(() => {        
        homePage.visit()
    })

    it('User sees title OUR TOP SERVICES', () => {        
        homePage.getSectionTitle()
            .should('contain', 'OUR TOP SERVICES')
    })

    it('User opens Our Services page', () => {
        const ourServicesPage = homePage.viewOurServices()
        ourServicesPage.getPageTitle()
            .should('be.visible')
            .should('contain', 'OUR SERVICES')
    })

    it('User sends an email via Contact Us form', () => {
        homePage.sendEmail('John Smith', 'tester1@standprof.co.uk', 'Hello, how are you?')
        homePage.getThankYouMessage()
            .should('be.visible')
            .should('contain.text', 'Thank you for your message')
    })
})
