class AddressBook {
    get addNewAddressButton() {
        return cy.xpath("//a[.='New Address']")
    }

    get companyNameInput() {
        return cy.get('#input-company')
    }

    get addressFirstLineInput() {
        return cy.get('#input-address-1')
    }

    get addressFirstLineErrorMessage() {
        return cy.get('fieldset > div:nth-of-type(4) .text-danger')
    }

    get addressSecondLineInput() {
        return cy.get('#input-address-2')
    }

    get cityInput() {
        return cy.get('#input-city')
    }

    get cityErrorMessage() {
        return cy.get('div:nth-of-type(6) .text-danger')
    }

    get postCodeInput() {
        return cy.get('#input-postcode')
    }

    get postCodeErrorMessage() {
        return cy.get('div:nth-of-type(7) .text-danger')
    }

    get countrySelect() {
        return cy.get('#input-country')
    }

    get regionStateSelect() {
        return cy.get('#input-zone')
    }

    get regionStateErrorMessage() {
        return cy.get('div:nth-of-type(9) .text-danger')
    }

    get defaultAddressYes() {
        return cy.get('div:nth-of-type(10) div:nth-of-type(1) > label')
    }

    get defaultAddressNo() {
        return cy.get('div:nth-of-type(10) div:nth-of-type(2) > label')
    }

    get addressSummary() {
        return cy.get('.table-bordered tr:nth-of-type(2) > .text-left')
    }

    get defaultAddressEditButton() {
        return cy.get('.table-bordered tr:nth-of-type(1) .btn-info')
    }

    get addressEditButton() {
        return cy.get('.table-bordered tr:nth-of-type(2) .btn-info')
    }

    get addressDeleteButton() {
        return cy.get('.table-bordered tr:nth-of-type(2) .btn-danger')
    }

    get warningMessage() {
        return cy.get('#account-address > .alert')
    }
}
export default new AddressBook()