class EditAccount {
    get phoneNumberHelpMessage() {
        return cy.get('#input-telephone-help')
    }

    get firstNameErrorMessage() {
        return cy.get('fieldset > div:nth-of-type(1) .text-danger')
    }

    get lastNameErrorMessage() {
        return cy.get('fieldset > div:nth-of-type(2) .text-danger')
    }

    get emailErrorMessage() {
        return cy.get('fieldset > div:nth-of-type(3) .text-danger')
    }

    get telephoneErrorMessage() {
        return cy.get('fieldset > div:nth-of-type(4) .text-danger')
    }

    get backButton() {
        return cy.xpath("//a[contains(.,'Back')]")
    }

    get passwordMessage() {
        return cy.get('.mb-4 > div:nth-of-type(1) .text-danger')
    }

    get confirmPasswordMessage() {
        return cy.get('.mb-4 > div:nth-of-type(2) .text-danger')
    }
}
export default new EditAccount()