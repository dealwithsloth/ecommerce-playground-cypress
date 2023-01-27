class Cart {
    cartPageLink() {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart')
    }

    get productPhoto() {
        return cy.get(':nth-child(1) > .text-center > a > .img-thumbnail')
    }

    get productName() {
        return cy.get('form > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(2) > a')
    }

    get cartQuantityInputField() {
        return cy.get(':nth-child(1) > :nth-child(4) > .input-group > .form-control')
    }

    get checkoutButton() {
        return cy.xpath("//a[.='Checkout']")
    }

    get continueShoppingButton() {
        return cy.xpath("//a[.='Continue Shopping']")
    }

    get updateCartQuantityButton() {
        return cy.get('.input-group-append > .btn-primary > .fas')
    }

    get deleteFromCartButton() {
        return cy.get('.fa-times-circle')
    }

    get useCouponCodeCollapse() {
        return cy.get("[data-target='#collapse-coupon']")
    }

    get couponCodeInputField() {
        return cy.get('#input-coupon')
    }

    get applyCouponCodeButton() {
        return cy.get('#button-coupon')
    }

    get estimateShippingCollapse() {
        return cy.get("[data-target='#collapse-shipping']")
    }

    get countrySelectErrorMessage() {
        return cy.get(':nth-child(1) > .col-md-9 > .invalid-feedback')
    }

    get getQuotesButon() {
        return cy.get('#button-quote')
    }

    get useGiftCodeCollapse() {
        return cy.get("[data-target='#collapse-voucher']")
    }

    get giftCodeInput() {
        return cy.get('#input-voucher')
    }

    get giftCodeButton() {
        return cy.get('#button-voucher')
    }

    get shippingMethods() {
        return cy.get('#modal-shipping .modal-content')
    }

    get singleShippingMethod() {
        return cy.get('.form-check > label')
    }

    get cancelButton() {
        return cy.get('.btn btn-light')
    }

    get applyShippingButton() {
        return cy.get('#button-shipping')
    }

    get shippingCost() {
        return cy.get('.m-0.table tr:nth-of-type(2) > td:nth-of-type(2)')
    }

    get erorMessageCloseButton() {
        return cy.get('.alert > .close')
    }

    get emptyCartContent() {
        return cy.get('#content')
    }
}
export default new Cart()