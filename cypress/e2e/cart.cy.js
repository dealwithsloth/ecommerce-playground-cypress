import addressBook from "../../pageObjects/addressBook"
import cart from "../../pageObjects/cart"
import homePage from "../../pageObjects/homePage"
import productPage from "../../pageObjects/productPage"
import singleRegister from "../../pageObjects/singleRegister"
import registerData from '../fixtures/registerData.json'

describe('Cart', () => {
    beforeEach(() => {
        cy.login()
        cart.cartPageLink()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Shopping Cart')
        singleRegister.breadCrumbs.should('be.visible').and('contain.text', 'Shopping Cart')
    })

    it('Go to Cart via success message', () => {
        cy.addSomeProductToCart()
        productPage.successMessageGoToCartButton.should('be.visible')
        productPage.successMessageGoToCartButton.click()
        cart.continueShoppingButton.should('be.visible')
        cart.checkoutButton.should('be.visible')
    })

    it('Click product photo', () => {
        cart.productPhoto.should('be.visible')
        cart.productPhoto.click()
        productPage.availabilityBadgeInStock.should('be.visible')
        productPage.addToCartButton.should('be.visible')
    })

    it('Click product name', () => {
        cart.productName.should('be.visible')
        cart.productName.click()
        productPage.availabilityBadgeInStock.should('be.visible')
        productPage.addToCartButton.should('be.visible')
    })

    it('Change product quantity', () => {
        cart.cartQuantityInputField.should('be.visible')
        cart.cartQuantityInputField.clear().type(5)
        cart.updateCartQuantityButton.click()
        homePage.successMessage.should('be.visible').and('contain.text', 'Success: You have modified your shopping cart!')
    })

    it('Cart coupon codes', () => {
        cart.useCouponCodeCollapse.should('be.visible')
        cart.useCouponCodeCollapse.click()
        cart.couponCodeInputField.should('be.visible')
        cart.couponCodeInputField.click()
        cart.applyCouponCodeButton.should('be.visible')
        cart.applyCouponCodeButton.click()
        singleRegister.errorMessage.should('be.visible').and('contain.text', 'Warning: Please enter a coupon code!')
        cart.erorMessageCloseButton.click()
        cart.couponCodeInputField.type('asd')
        cart.couponCodeInputField.click()
        cart.applyCouponCodeButton.click()
        singleRegister.errorMessage.should('be.visible').and('contain.text', 'Warning: Coupon is either invalid, expired or reached its usage limit!')
    })

    it('Cart shipping', () => {
        cart.estimateShippingCollapse.should('be.visible')
        cart.estimateShippingCollapse.click()
        addressBook.countrySelect.should('be.visible')
        addressBook.countrySelect.select(registerData.userCorrect.country)
        addressBook.regionStateSelect.should('be.visible')
        addressBook.regionStateSelect.select(registerData.userCorrect.region)
        addressBook.postCodeInput.should('be.visible')
        addressBook.postCodeInput.clear().type(registerData.userCorrect.postCode)
        cart.getQuotesButon.click()
        cart.shippingMethods.should('be.visible').and('contain.text', 'Please select the preferred shipping method to use on this order.')
        cart.singleShippingMethod.click()
        cart.applyShippingButton.should('be.visible')
        cart.applyShippingButton.click()
        homePage.successMessage.should('be.visible').and('contain.text', 'Success: Your shipping estimate has been applied!')
        cart.shippingCost.should('be.visible').and('contain.text', '$')
    })

    it('Cart gift code', () => {
        cart.useGiftCodeCollapse.should('be.visible')
        cart.useGiftCodeCollapse.click()
        cart.giftCodeInput.should('be.visible')
        cart.giftCodeInput.click()
        cart.giftCodeButton.click()
        singleRegister.errorMessage.should('be.visible').and('contain.text', 'Warning: Please enter a gift certificate code!')
        cart.erorMessageCloseButton.click()
        cart.giftCodeInput.type('asd')
        cart.giftCodeButton.click()
        singleRegister.errorMessage.should('be.visible').and('contain.text', 'Warning: Gift Certificate is either invalid or the balance has been used up!')
    })

    it('Proceed to checkout', () => {
        cart.checkoutButton.should('be.visible')
        cart.checkoutButton.click()
        singleRegister.breadCrumbs.should('be.visible').and('contain.text', 'Checkout')
    })

    it('Delete product from cart', () => {
        cart.deleteFromCartButton.should('be.visible')
        cart.deleteFromCartButton.click()
        cart.emptyCartContent.should('be.visible').and('contain.text', 'Your shopping cart is empty!')
    })
})