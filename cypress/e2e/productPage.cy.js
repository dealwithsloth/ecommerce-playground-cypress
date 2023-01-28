import productPage from "../../pageObjects/productPage"
import singleRegister from "../../pageObjects/singleRegister"
import cart from "../../pageObjects/cart"
import homePage from "../../pageObjects/homePage"
import myOrders from "../../pageObjects/myOrders"

describe('Product tests', () => {
    beforeEach(() => {
        cy.login()
        productPage.simpleProductPage()
        singleRegister.breadCrumbs.should('be.visible').and('contain.text', 'HTC Touch HD')
    })

    it('Simple product stock and price', () => {
        productPage.availabilityBadgeInStock.should('be.visible')
        productPage.price.should('be.visible').and('contain.text', '$')
        productPage.priceInformation.should('be.visible')
        productPage.priceInformation.click()
        productPage.priceTooltip.should('be.visible').and('contain.text', 'Ex Tax:')
        productPage.priceInformation.click()
        productPage.priceTooltip.should('not.exist')
    })

    it('Quantity input field', () => {
        productPage.quantityInputField.should('be.visible')
        productPage.quantityInputField.click()
        productPage.quantityInputField.clear().type(5)
        productPage.quantityInputField.type('{selectall}').should('have.value', 5)
        productPage.minusButton.click()
        productPage.quantityInputField.type('{selectall}').should('have.value', 4)
        productPage.plusButton.click()
        productPage.quantityInputField.type('{selectall}').should('have.value', 5)
    })

    it('Add to cart button', () => {
        productPage.addToCartButton.should('be.visible')
        productPage.addToCartButton.click()
        productPage.successMessageBody.should('be.visible').and('contain.text', 'Success: You have added')
        productPage.successMessageGoToCartButton.click()
        singleRegister.breadCrumbs.should('be.visible').and('contain.text', 'Shopping Cart')
        cart.productName.should('be.visible')
        cart.deleteFromCartButton.click()
        cart.emptyCartContent.should('be.visible').and('contain.text', 'Your shopping cart is empty!')
    })

    it('Compare product button', () => {
        productPage.compareProductButton.should('be.visible')
        productPage.compareProductButton.click()
        productPage.compareProductCheckMark.should('be.visible')
        productPage.successMessageTitle.should('be.visible').and('contain.text', 'Product Compare')
        productPage.compareProductCheckMark.should('be.visible')
        productPage.proceedToCompareListButton.click()
        singleRegister.breadCrumbs.should('be.visible').and('contain.text', 'Product Comparison')
        myOrders.returnButton.click()
        homePage.successMessage.should('be.visible').and('contain.text', 'Success: You have modified your product comparison!')
        cart.emptyCartContent.should('be.visible').and('contain.text', 'You have not chosen any products to compare.')
        productPage.simpleProductPage()
        productPage.compareProductCheckMark.should('not.be.visible')
    })

    it('Buy now button', () => {
        productPage.buyNowButton.should('be.visible')
        productPage.buyNowButton.click()
        singleRegister.breadCrumbs.should('be.visible').and('contain.text', 'Checkout')
        myOrders.returnButton.should('be.visible')
        myOrders.returnButton.click()
        cart.emptyCartContent.should('be.visible').and('contain.text', 'Your shopping cart is empty!')
    })
})