// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import singleRegister from "../../pageObjects/singleRegister"
import registerData from '../fixtures/registerData.json'
import singleLogin from '../../pageObjects/singleLogin'

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
        options.log = false
        Cypress.log({
            $el: element,
            name: 'type',
            message: '*'.repeat(text.length)
        })
    }
    return originalFn(element, text, options)
})

Cypress.Commands.add('login', () => {
    cy.session('loginSession', () => {
        cy.visit('/index.php?route=account/login')
        singleRegister.emailInput.clear().type(registerData.userCorrect.mailAddress)
        singleRegister.passwordInput.clear().type(registerData.userCorrect.password, { sensitive: true })
        singleLogin.logInButton.should('be.visible')
        singleLogin.logInButton.click()
    })
})