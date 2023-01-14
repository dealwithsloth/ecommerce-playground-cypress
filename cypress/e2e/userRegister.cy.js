/// <reference types="cypress" />
import homePage from '../../pageObjects/homePage'
import singleRegister from '../../pageObjects/singleRegister'
import registerData from '../fixtures/registerData.json'
import { generateRandomEmailAddress } from '../../utility/stringGenerator'

describe('User register test', () => {
    beforeEach(() => {
        cy.visit("/")
        homePage.myAccountDropdown.trigger('mouseover')
        homePage.registerButton.click()
    })

    it('Register - empty fields', () => {
        singleRegister.continueButton.should('be.visible')
        singleRegister.continueButton.click()
        singleRegister.errorMessage.should('be.visible').and('contain.text', 'You must agree to the Privacy Policy!')
        singleRegister.requiredFirstNameErrorMessage.should('be.visible').and('contain.text', 'First Name must be between 1 and 32 characters!')
        singleRegister.requiredLastNameErrorMessage.should('be.visible').and('contain.text', 'Last Name must be between 1 and 32 characters!')
        singleRegister.requiredMailAddressErrorMessage.should('be.visible').and('contain.text', 'E-Mail Address does not appear to be valid!')
        singleRegister.requiredPhoneNumberErrorMessage.should('be.visible').and('contain.text', 'Telephone must be between 3 and 32 characters!')
        singleRegister.requiredPasswordErrorMessage.should('be.visible').and('contain.text', 'Password must be between 4 and 20 characters!')
    })

    it('Register - wrong email address format', () => {
        singleRegister.emailInput.clear().type(registerData.userIncorrect.mailAddressFormat)
        singleRegister.continueButton.should('be.visible')
        singleRegister.continueButton.click()
        singleRegister.requiredMailAddressErrorMessage.should('be.visible').and('contain.text', 'E-Mail Address does not appear to be valid!')
    })

    it('Register - too short password', () => {
        singleRegister.passwordInput.clear().type(registerData.userIncorrect.password, { sensitive: true })
        singleRegister.continueButton.should('be.visible')
        singleRegister.continueButton.click()
        singleRegister.requiredPasswordErrorMessage.should('be.visible').and('contain.text', 'Password must be between 4 and 20 characters!')
    })

    it('Register - confirm password does not match', () => {
        singleRegister.passwordInput.clear().type(registerData.userIncorrect.password, { sensitive: true })
        singleRegister.continueButton.should('be.visible')
        singleRegister.continueButton.click()
        singleRegister.confirmPasswordErrorMessage.should('be.visible').and('contain.text', 'Password confirmation does not match password!')
    })

    it('Register - no agree privacy policy', () => {
        singleRegister.firstNameInput.clear().type(registerData.userCorrect.firstName)
        singleRegister.lastNameInput.clear().type(registerData.userCorrect.lastName)
        singleRegister.emailInput.clear().type(generateRandomEmailAddress())
        singleRegister.telephoneNumberInput.clear().type(registerData.userCorrect.phoneNumber)
        singleRegister.passwordInput.clear().type(registerData.userCorrect.password, { sensitive: true })
        singleRegister.confirmPasswordInput.clear().type(registerData.userCorrect.password, { sensitive: true })
        singleRegister.continueButton.should('be.visible')
        singleRegister.continueButton.click()
        singleRegister.errorMessage.should('be.visible').and('contain.text', 'You must agree to the Privacy Policy!')
    })

    it('Register - correct data and success', () => {
        singleRegister.firstNameInput.clear().type(registerData.userCorrect.firstName)
        singleRegister.firstNameInput.type('{selectall}')
        singleRegister.firstNameInput.should('contain.value', registerData.userCorrect.firstName)
        singleRegister.lastNameInput.clear().type(registerData.userCorrect.lastName)
        singleRegister.lastNameInput.type('{selectall}')
        singleRegister.lastNameInput.should('contain.value', registerData.userCorrect.lastName)
        singleRegister.emailInput.clear().type(generateRandomEmailAddress())
        singleRegister.telephoneNumberInput.clear().type(registerData.userCorrect.phoneNumber)
        singleRegister.telephoneNumberInput.type('{selectall}')
        singleRegister.telephoneNumberInput.should('contain.value', registerData.userCorrect.phoneNumber)
        singleRegister.passwordInput.clear().type(registerData.userCorrect.password, { sensitive: true })
        singleRegister.passwordInput.type('{selectall}')
        singleRegister.confirmPasswordInput.clear().type(registerData.userCorrect.password, { sensitive: true })
        singleRegister.privacyPolicyCheckbox.click()
        singleRegister.continueButton.should('be.visible')
        singleRegister.continueButton.click()
        singleRegister.breadCrumbs.should('be.visible').and('contain.text', 'Success')
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Your Account Has Been Created!')
    })
})