import cart from "../../pageObjects/cart"
import checkout from "../../pageObjects/checkout"
import myOrders from "../../pageObjects/myOrders"
import singleRegister from "../../pageObjects/singleRegister"
import registerData from '../fixtures/registerData.json'

describe('Checkout tests', () => {
    beforeEach(() => {
        cy.login()
        cy.addSomeProductToCart()
        checkout.checkoutPageLink()
        singleRegister.breadCrumbs.should('be.visible').and('contain.text', 'Checkout')
    })

    it('Telephone section empty field', () => {
        checkout.telephoneInputField.should('be.visible').and('have.value', registerData.userCorrect.phoneNumber)
        checkout.telephoneInputField.clear()
        checkout.continueButton.should('exist')
        checkout.continueButton.click()
        checkout.telephoneErorMessage.should('be.visible').contains('Telephone must be between 3 and 32 characters!')
        myOrders.returnButton.scrollIntoView()
        myOrders.returnButton.click()
    })

    it('Billing address', () => {
        checkout.billingAddressExistingAddress.should('be.visible')
        checkout.billingAddressSelect.contains(registerData.userCorrect.firstName)
        checkout.addNewAddressButton.should('be.visible')
        checkout.addNewAddressButton.click()
        checkout.billingFirstNameInput.should('exist')
        checkout.billingLastNameInput.should('exist')
        checkout.billingCompanyNameInput.should('exist')
        checkout.billingAddressFirstLineInput.should('exist')
        checkout.billingAddressSecondLineInput.should('exist')
        checkout.billingAddressCityInput.should('exist')
        checkout.billingPostcodeInput.should('exist')
        checkout.billingCountrySelect.should('be.visible').contains(registerData.userCorrect.country)
        checkout.billingCountrySelect.focus().select(0)
        checkout.billingRegionSelect.should('be.visible').contains(' --- None --- ')
        checkout.billingRegionSelect.focus().select(0)
        checkout.continueButton.should('be.visible')
        checkout.continueButton.click()
        checkout.billingFirstNameErrorMessage.should('exist').contains('First Name must be between 1 and 32 characters!')
        checkout.billingLastNameErrorMessage.should('exist').contains('Last Name must be between 1 and 32 characters!')
        checkout.billingAddressFirstLineErrorMessage.should('exist').contains('Address 1 must be between 3 and 128 characters!')
        checkout.billingAddressCityErrorMessage.should('exist').contains('City must be between 2 and 128 characters!')
        checkout.billingCountryErrorMessage.should('exist').contains('Please select a country!')
        checkout.billingRegionErrorMessage.should('exist').contains('Please select a region / state!')
        myOrders.returnButton.scrollIntoView()
        myOrders.returnButton.click()
    })

    it('Shipping Address', () => {
        checkout.shippingAddressSameAsBilling.should('exist')
        checkout.shippingAddressSameAsBilling.click()
        checkout.addNewShippingAddress.click()
        checkout.shippingAddressCountrySelect.should('be.visible').contains(registerData.userCorrect.country)
        checkout.shippingAddressCountrySelect.select(0)
        checkout.shippingAddressRegionSelect.should('be.visible').contains(' --- None --- ')
        checkout.shippingAddressRegionSelect.select(0)
        checkout.continueButton.scrollIntoView()
        checkout.continueButton.should('be.visible')
        checkout.continueButton.click()
        checkout.shippingAddressFirstNameErrorMessage.should('exist').contains('First Name must be between 1 and 32 characters!')
        checkout.shippingAddressLastNameErrorMessage.should('exist').contains('Last Name must be between 1 and 32 characters!')
        checkout.shippingaddressFirstLineErrorMessage.should('exist').contains('Address 1 must be between 3 and 128 characters!')
        checkout.shippingAddressCityErrorMessage.should('exist').contains('City must be between 2 and 128 characters!')
        checkout.shippingAddressCountryErrorMessage.should('exist').contains('Please select a country!')
        checkout.shippingAddressRegionErrorMessage.should('exist').contains('Please select a region / state!')
        myOrders.returnButton.scrollIntoView()
        myOrders.returnButton.click()
    })

    it('Summary field', () => {
        checkout.summaryFieldCard.should('be.visible')
        checkout.quantityInputField.clear().type(5)
        checkout.quantityInputField.should('have.value', '5')
        myOrders.returnButton.scrollIntoView()
        myOrders.returnButton.click()
    })

    it('Coupon code', () => {
        cart.couponCodeInputField.should('be.visible')
        cart.applyCouponCodeButton.click()
        singleRegister.errorMessage.should('exist').contains('Warning: Please enter a coupon code!')
        cart.couponCodeInputField.type('fake code')
        cart.applyCouponCodeButton.click()
        singleRegister.errorMessage.should('exist').and('have.text', ' Warning: Coupon is either invalid, expired or reached its usage limit! ×')
        myOrders.returnButton.scrollIntoView()
        myOrders.returnButton.click()
    })

    it('Gift card', () => {
        checkout.giftCard.scrollIntoView()
        checkout.giftCard.should('be.visible')
        checkout.giftCard.click({ force: true })
        checkout.giftCardInputField.should('be.visible')
        checkout.giftCardApplyButton.click()
        myOrders.returnButton.scrollIntoView()
        myOrders.returnButton.click()
    })

    it('Comment input field', () => {
        checkout.commentInputField.scrollIntoView()
        checkout.commentInputField.should('be.visible')
        checkout.commentInputField.type(registerData.userCorrect.companyName)
        myOrders.returnButton.scrollIntoView()
        myOrders.returnButton.click()
    })

    it('Place an order - no agree to terms', () => {
        checkout.commentInputField.click()
        checkout.continueButton.scrollIntoView()
        checkout.continueButton.should('be.visible')
        checkout.continueButton.click({ force: true })
        checkout.checkoutWarningMessage.should('exist').contains('Warning: You must agree to the Terms & Conditions!')
        myOrders.returnButton.scrollIntoView()
        myOrders.returnButton.click()
    })

    it('Place an order - success', () => {
        checkout.billingAddressExistingAddress.click()
        checkout.commentInputField.type(registerData.userCorrect.companyName)
        checkout.continueButton.scrollIntoView()
        checkout.continueButton.should('be.visible')
        checkout.termsAgreement.click()
        checkout.continueButton.click()
        singleRegister.breadCrumbs.should('be.visible').and('contain.text', 'Confirm Order')
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Confirm Order')
        checkout.confirmOrderBillingAddress.should('be.visible').contains(registerData.userCorrect.firstName)
        checkout.confirmOrderShippingAddress.should('be.visible').contains(registerData.userCorrect.lastName)
        checkout.orderComments.scrollIntoView()
        checkout.orderComments.should('be.visible')
        checkout.editButton.click()
        singleRegister.breadCrumbs.should('be.visible').and('contain.text', 'Checkout')
        checkout.continueButton.scrollIntoView()
        checkout.continueButton.should('be.visible')
        checkout.termsAgreement.click()
        checkout.continueButton.click()
        singleRegister.breadCrumbs.should('be.visible').and('contain.text', 'Confirm Order')
        checkout.orderComments.contains(registerData.userCorrect.companyName)
        checkout.confirmOrderButton.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Your order has been placed!')
    })
})