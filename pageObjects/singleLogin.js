class SingleLogin {
    get breadcrumbs() {
        return cy.get('.breadcrumb')
    }

    get returningCustomerCardBody() {
        return cy.get('#content div:nth-of-type(2) .card-body')
    }

    get logInButton() {
        return cy.xpath("//input[@class='btn btn-primary']")
    }

    get forgottePasswordLink() {
        return cy.xpath("//a[.='Forgotten Password']")
    }
}
export default new SingleLogin();