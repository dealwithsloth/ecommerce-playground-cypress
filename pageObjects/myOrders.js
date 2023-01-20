class MyOrders {
    get orderIDColumn() {
        return cy.get('thead > tr > :nth-child(1)')
    }

    get customerColumn() {
        return cy.get('#content > .table-responsive > .table > tbody :nth-child(2)')
    }

    get viewOrderButton() {
        return cy.get('.btn > .fa')
    }

    get reorderButton() {
        return cy.get('.fa-shopping-cart')
    }

    get returnButton() {
        return cy.get('.btn-danger')
    }

    get orderID() {
        return cy.get('#input-order-id')
    }

    get reasonForReturn() {
        return cy.get(':nth-child(5) > .col-sm-10 > :nth-child(1) > label')
    }

    get commentInput() {
        return cy.get('#input-comment')
    }

    get submitButton() {
        return cy.get('.float-right > .btn')
    }
}
export default new MyOrders()