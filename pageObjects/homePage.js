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

    get logoutButton() {
        return cy.xpath("//span[contains(.,'Logout')]")
    }

    get successMessage() {
        return cy.get('.alert-success')
    }
}
export default new HomePage();