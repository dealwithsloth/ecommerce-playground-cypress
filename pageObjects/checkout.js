class Checkout {
    checkoutPageLink() {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout')
    }

    get continueButton() {
        return cy.get('#button-save')
    }

    get telephoneInputField() {
        return cy.get('#input-telephone')
    }

    get telephoneErorMessage() {
        return cy.get('.invalid-feedback')
    }

    get billingAddressExistingAddress() {
        return cy.get('#payment-address > :nth-child(2) > .custom-control')
    }

    get billingAddressSelect() {
        return cy.get("[name='address_id']")
    }

    get addNewAddressButton() {
        return cy.get("[for='input-payment-address-new']")
    }

    get billingFirstNameInput() {
        return cy.get('#input-payment-firstname')
    }

    get billingFirstNameErrorMessage() {
        return cy.get('#payment-new > div:nth-of-type(1) .invalid-feedback')
    }

    get billingLastNameInput() {
        return cy.get('#input-payment-lastname')
    }

    get billingLastNameErrorMessage() {
        return cy.get('#payment-new > div:nth-of-type(2) .invalid-feedback')
    }

    get billingCompanyNameInput() {
        return cy.get('#input-payment-company')
    }

    get billingAddressFirstLineInput() {
        return cy.get('#input-payment-address-1')
    }

    get billingAddressFirstLineErrorMessage() {
        return cy.get('#payment-new > div:nth-of-type(4) .invalid-feedback')
    }

    get billingAddressSecondLineInput() {
        return cy.get('#input-payment-address-2')
    }

    get billingAddressCityInput() {
        return cy.get('#input-payment-city')
    }

    get billingAddressCityErrorMessage() {
        return cy.get('#payment-new > div:nth-of-type(6) .invalid-feedback')
    }

    get billingPostcodeInput() {
        return cy.get('#input-payment-postcode')
    }

    get billingCountrySelect() {
        return cy.get('#input-payment-country')
    }

    get billingCountryErrorMessage() {
        return cy.get(':nth-child(8) > .col-sm-9 > .invalid-feedback')
    }

    get billingRegionSelect() {
        return cy.get('#input-payment-zone')
    }

    get billingRegionErrorMessage() {
        return cy.get(':nth-child(9) > .col-sm-9 > .invalid-feedback')
    }

    get checkoutWarningMessage() {
        return cy.get('.alert-warning')
    }

    get shippingAddressSameAsBilling() {
        return cy.get("[for='input-shipping-address-same']")
    }

    get existingShippingAddressSelect() {
        return cy.get("[name='shipping[address_id]']")
    }

    get addNewShippingAddress() {
        return cy.get("[for='input-shipping-address-new']")
    }

    get shippingAddressFirstNameInput() {
        return cy.get('#input-shipping-firstname')
    }

    get shippingAddressFirstNameErrorMessage() {
        return cy.get('#shipping-new > div:nth-of-type(1) .invalid-feedback')
    }

    get shippingAddressLastNameInput() {
        return cy.get('#input-shipping-lastname')
    }

    get shippingAddressLastNameErrorMessage() {
        return cy.get('#shipping-new > div:nth-of-type(2) .invalid-feedback')
    }

    get shippingAddressFirstLineInput() {
        return cy.get('#input-shipping-address-1')
    }

    get shippingaddressFirstLineErrorMessage() {
        return cy.get('#shipping-new > div:nth-of-type(4) .invalid-feedback')
    }

    get shippingAddressCityInput() {
        return cy.get('#input-shipping-city')
    }

    get shippingAddressCityErrorMessage() {
        return cy.get('#shipping-new > div:nth-of-type(6) .invalid-feedback')
    }

    get shippingAddressCountrySelect() {
        return cy.get('#input-shipping-country')
    }

    get shippingAddressCountryErrorMessage() {
        return cy.get('#shipping-new > div:nth-of-type(8) .invalid-feedback')
    }

    get shippingAddressRegionSelect() {
        return cy.get('#input-shipping-zone')
    }

    get shippingAddressRegionErrorMessage() {
        return cy.get('#shipping-new > div:nth-of-type(9) .invalid-feedback')
    }

    get summaryFieldCard() {
        return cy.get('.cart-card')
    }

    get quantityInputField() {
        return cy.get('.remove-spin-button')
    }

    get giftCard() {
        return cy.get(':nth-child(2) > .card-header')
    }

    get giftCardInputField() {
        return cy.get('#input-voucher')
    }

    get giftCardApplyButton() {
        return cy.get('#button-voucher')
    }

    get commentInputField() {
        return cy.get('#input-comment')
    }

    get termsAgreement() {
        return cy.get("[for='input-agree']")
    }

    get confirmOrderBillingAddress() {
        return cy.get('#content > .row > div:nth-of-type(1)')
    }

    get confirmOrderShippingAddress() {
        return cy.get('#content > .row > div:nth-of-type(2)')
    }

    get orderComments() {
        return cy.get('#content > div:nth-of-type(4) > .card-body')
    }

    get editButton() {
        return cy.get('.mr-3')
    }

    get confirmOrderButton() {
        return cy.get('#button-confirm')
    }
}

export default new Checkout()