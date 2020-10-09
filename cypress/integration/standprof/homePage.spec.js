/// <reference types="cypress" />
import HomePage from '../../support/pages/homePage'

describe('Home page', () => {
    const homePage = new HomePage()

    beforeEach(() => {        
        homePage.visit()
    })

    it('User sees title OUR TOP SERVICES', () => {        
        homePage.containsTitle('OUR TOP SERVICES')
    })

    it('User opens Our Services page', () => {
        const ourServicesPage = homePage.viewOurServices()
        ourServicesPage.isOpened()
    })
})
