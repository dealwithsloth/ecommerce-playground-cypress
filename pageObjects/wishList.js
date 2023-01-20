class WishList {
    get productTable() {
        return cy.get('#content > .table-responsive')
    }

    get wishListAddToCartButton() {
        return cy.get('.border tr:nth-of-type(1) .fas')
    }

    get wishListRemoveButton() {
        return cy.get('.border tr:nth-of-type(1) .fa')
    }

    get addedToCartMessage() {
        return cy.get('.toast-body')
    }
}
export default new WishList()