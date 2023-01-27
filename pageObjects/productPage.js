class ProductPage {
    get availabilityBadgeInStock() {
        return cy.get('.badge-success')
    }

    get availabilityBadgePreOrder() {
        return cy.get('.badge-danger')
    }

    get price() {
        return cy.get('price-new mb-0')
    }

    get minusButton() {
        return cy.get('#entry_216841 > .input-group > .input-group-prepend > .btn > .fas')
    }

    get plusButton() {
        return cy.get('#entry_216841 > .input-group > .input-group-append > .btn > .fas')
    }

    get addToCartButton() {
        return cy.get('.order-lg-1 > .text')
    }

    get successMessageBody() {
        return cy.get('.toast-body')
    }

    get successMessageGoToCartButton() {
        return cy.get('.form-row .btn-primary')
    }

    get successMessageGoToCheckoutButton() {
        return cy.get('.form-row .btn-secondary')
    }

    get successMessageCartLink() {
        return cy.xpath("//a[.='shopping cart']")
    }
}
export default new ProductPage()