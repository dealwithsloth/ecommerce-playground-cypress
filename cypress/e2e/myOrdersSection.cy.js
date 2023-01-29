import homePage from '../../pageObjects/homePage'
import singleRegister from '../../pageObjects/singleRegister'
import myAccountSection from '../../pageObjects/myAccountSection'
import myOrders from '../../pageObjects/myOrders'

describe('My Orders section tests', () => {
    beforeEach(() => {
        cy.login()
        myAccountSection.myAccountPageLink()
    })

    it('My Orders cards visibility', () => {
        myAccountSection.orderHistoryLink.should('be.visible')
        myAccountSection.downloadsLink.should('be.visible')
        myAccountSection.rewardPointsLink.should('be.visible')
        myAccountSection.returnRequestsHistoryLink.should('be.visible')
        myAccountSection.yourTransactionsLink.should('be.visible')
        myAccountSection.recurringPaymentsLink.should('be.visible')
    })

    it('Order history', () => {
        myAccountSection.orderHistoryLink.should('be.visible')
        myAccountSection.orderHistoryLink.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Order History')
        myOrders.orderIDColumn.should('be.visible').and('contain.text', 'Order ID')
        myOrders.viewOrderButton.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Order History')
        myOrders.reorderButton.click()
        homePage.successMessage.should('be.visible').and('contain.text', 'Success: You have added')
        myOrders.returnButton.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Product Returns')
        myOrders.reasonForReturn.click()
        myOrders.commentInput.clear().type('Test comment')
        myOrders.submitButton.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Product Returns')
        cy.clearCart()
    })
})