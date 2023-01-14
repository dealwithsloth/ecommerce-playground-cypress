class SingleRegister {
    get firstNameInput() {
        return cy.get('#input-firstname')
    }

    get lastNameInput() {
        return cy.get('#input-lastname')
    }

    get emailInput() {
        return cy.get('#input-email')
    }

    get telephoneNumberInput() {
        return cy.get('#input-telephone')
    }

    get passwordInput() {
        return cy.get('#input-password')
    }

    get confirmPasswordInput() {
        return cy.get('#input-confirm')
    }

    get newsletterYesLabel() {
        return cy.get("[for='input-newsletter-yes']")
    }

    get newsletterNoLabel() {
        return cy.get("[for='input-newsletter-no']")
    }

    get privacyPolicyCheckbox() {
        return cy.get('.custom-checkbox')
    }

    get continueButton() {
        return cy.xpath("//input[@class='btn btn-primary']")
    }

    get errorMessage() {
        return cy.get('.alert-danger')
    }

    get requiredFirstNameErrorMessage() {
        return cy.get('#account > div:nth-of-type(2) .text-danger')
    }

    get requiredLastNameErrorMessage() {
        return cy.get('#account > div:nth-of-type(3) .text-danger')
    }

    get requiredMailAddressErrorMessage() {
        return cy.get('#account > div:nth-of-type(4) .text-danger')
    }

    get requiredPhoneNumberErrorMessage() {
        return cy.get('#account > div:nth-of-type(5) .text-danger')
    }

    get requiredPasswordErrorMessage() {
        return cy.get('fieldset:nth-of-type(2) .text-danger')
    }

    get confirmPasswordErrorMessage() {
        return cy.get('fieldset:nth-of-type(2) > div:nth-of-type(2) .text-danger')
    }

    get breadCrumbs() {
        return cy.get('.breadcrumb')
    }

    get pageTitle() {
        return cy.get('.page-title')
    }
}
export default new SingleRegister();