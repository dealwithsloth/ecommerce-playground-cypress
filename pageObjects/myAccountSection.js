class MyAccountSection {
    get myAccountContent() {
        return cy.get('#account-account')
    }
}
export default new MyAccountSection();