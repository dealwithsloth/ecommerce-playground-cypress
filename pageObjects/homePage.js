class HomePage {
    get myAccountDropdown() {
        return cy.get('.fa-user.icon')
    }

    get registerButton() {
        return cy.xpath("//span[contains(.,'Register')]")
    }

    get loginButton() {
        return cy.xpath("//span[contains(.,'Login')]")
    }
}
export default new HomePage();