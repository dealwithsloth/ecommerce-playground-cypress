/// <reference types="cypress" />
import homePage from '../../pageObjects/homePage'
import singleRegister from '../../pageObjects/singleRegister'
import registerData from '../fixtures/registerData.json'
import singleLogin from '../../pageObjects/singleLogin'
import myAccountSection from '../../pageObjects/myAccountSection'

describe('User login test', () => {
    beforeEach(() => {
        cy.visit("/")
        homePage.myAccountDropdown.trigger('mouseover')
        homePage.loginButton.click()
        singleLogin.breadcrumbs.should('be.visible')
        singleLogin.returningCustomerCardBody.should('be.visible').and('contain.text', 'Returning Customer')
    })

    it('Login - empty fields', () => {
        singleLogin.logInButton.should('be.visible')
        singleLogin.logInButton.click()
        singleRegister.errorMessage.should('be.visible').and('contain.text', 'Warning')
    })

    it('Login - wrong credentials', () => {
        singleRegister.emailInput.clear().type(registerData.userCorrect.mailAddress)
        singleRegister.passwordInput.clear().type(registerData.userIncorrect.password, { sensitive: true })
        singleLogin.logInButton.should('be.visible')
        singleLogin.logInButton.click()
        singleRegister.errorMessage.should('be.visible').and('contain.text', 'No match for E-Mail Address and/or Password.')
    })

    it('Login - forgotten password link', () => {
        singleLogin.forgottePasswordLink.should('be.visible')
        singleLogin.forgottePasswordLink.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Forgot Your Password?')
    })

    it('Login - correct credentials, success and logout', () => {
        singleRegister.emailInput.clear().type(registerData.userCorrect.mailAddress)
        singleRegister.passwordInput.clear().type(registerData.userCorrect.password, { sensitive: true })
        singleLogin.logInButton.should('be.visible')
        singleLogin.logInButton.click()
        myAccountSection.myAccountContent.should('be.visible').and('contain.text', 'My Account')
        homePage.myAccountDropdown.trigger('mouseover')
        homePage.logoutButton.should('be.visible')
        homePage.logoutButton.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Account Logout')
    })
})