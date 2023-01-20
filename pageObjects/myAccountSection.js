class MyAccountSection {
    get myAccountContent() {
        return cy.get('#content')
    }

    get myAccountPageLink() {
        return cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/account')
    }

    get myAccountCard() {
        return cy.get('#content > div:nth-of-type(1) > .card-header')
    }

    get myOrdersCard() {
        return cy.get('#content > div:nth-of-type(2) > .card-header')
    }

    get myAffiliateAccountCard() {
        return cy.get('#content > div:nth-of-type(3) > .card-header')
    }

    get myAccountRightColumn() {
        return cy.get('#column-right')
    }

    get editAccountInformationLink() {
        return cy.xpath("//a[contains(.,'Edit your account information')]")
    }

    get changeYourPasswordLink() {
        return cy.xpath("//a[contains(.,'Change your password')]")
    }

    get addressBookLink() {
        return cy.xpath("//a[contains(.,'Modify your address book entries')]")
    }

    get wishListLink() {
        return cy.xpath("//a[contains(.,'Modify your wish list')]")
    }

    get newsletterOptionsLink() {
        return cy.xpath("//a[contains(.,'Subscribe / unsubscribe to newsletter')]")
    }

    get orderHistoryLink() {
        return cy.xpath("//a[contains(.,'View your order history')]")
    }

    get downloadsLink() {
        return cy.xpath("//div[@id='content']//a[contains(.,'Downloads')]")
    }

    get rewardPointsLink() {
        return cy.xpath("//a[contains(.,'Your Reward Points')]")
    }

    get returnRequestsHistoryLink() {
        return cy.xpath("//a[contains(.,'View your return requests')]")
    }

    get yourTransactionsLink() {
        return cy.xpath("//a[contains(.,'Your Transactions')]")
    }

    get recurringPaymentsLink() {
        return cy.xpath("//div[6]/a[contains(.,'Recurring payments')]")
    }

    get registerForAffiliateLink() {
        return cy.get('.m-3')
    }

    get rightColumnLogoutLink() {
        return cy.get('.fa-sign-out-alt')
    }

    get rightColumnActiveTab() {
        return cy.get('.list-group-item active')
    }

    get newsletterNoRadio() {
        return cy.get("[for='input-newsletter-no']")
    }

    get newsletterYesRadio() {
        return cy.get("[for='input-newsletter-yes']")
    }
}
export default new MyAccountSection()