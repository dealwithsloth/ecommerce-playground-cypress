import cart from "../../pageObjects/cart"
import checkout from "../../pageObjects/checkout"
import myOrders from "../../pageObjects/myOrders"
import singleRegister from "../../pageObjects/singleRegister"
import registerData from '../fixtures/registerData.json'

const FIRST_NAME_ERROR_MESSAGE = 'First Name must be between 1 and 32 characters!'
const LAST_NAME_ERROR_MESSAGE = 'Last Name must be between 1 and 32 characters!'
const ADDRESS_FIRST_LINE_ERROR_MESSAGE = 'Address 1 must be between 3 and 128 characters!'
const CITY_ERROR_MESSAGE = 'City must be between 2 and 128 characters!'
const COUNTRY_ERROR_MESSAGE = 'Please select a country!'
const REGION_ERROR_MESSAGE = 'Please select a region / state!'

const billingAddressInputs = () => {
    checkout.billingFirstNameInput.should('exist')
    checkout.billingFirstNameInput.click()
    checkout.billingLastNameInput.should('exist')
    checkout.billingLastNameInput.click()
    checkout.billingCompanyNameInput.should('exist')
    checkout.billingCompanyNameInput.click()
    checkout.billingAddressFirstLineInput.should('exist')
    checkout.billingAddressFirstLineInput.click()
    checkout.billingAddressSecondLineInput.should('exist')
    checkout.billingAddressSecondLineInput.click()
    checkout.billingAddressCityInput.should('exist')
    checkout.billingAddressCityInput.click()
    checkout.billingPostcodeInput.should('exist')
    checkout.billingPostcodeInput.click()
}

const shippingAddressInputs = () => {
    checkout.shippingAddressFirstNameInput.should('exist')
    checkout.shippingAddressFirstNameInput.type('asd')
    checkout.shippingAddressFirstNameInput.clear()
    checkout.shippingAddressLastNameInput.should('exist')
    checkout.shippingAddressLastNameInput.click()
    checkout.shippingAddressCompanyNameInput.should('exist')
    checkout.shippingAddressCompanyNameInput.click()
    checkout.shippingAddressFirstLineInput.should('exist')
    checkout.shippingAddressFirstLineInput.click()
    checkout.shippingAddressSecondLineInput.should('exist')
    checkout.shippingAddressSecondLineInput.click()
    checkout.shippingAddressCityInput.should('exist')
    checkout.shippingAddressCityInput.click()
    checkout.shippingAddressPostCodeInput.should('exist')
    checkout.shippingAddressPostCodeInput.click()
}

describe('Checkout tests', () => {
    beforeEach(() => {
        cy.login()
        cy.addSomeProductToCart()
        checkout.checkoutPageLink()
        cy.url().should('include', 'checkout/checkout')
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
        billingAddressInputs()
        checkout.billingPostcodeInput.clear()
        checkout.billingCountrySelect.should('be.visible').contains(registerData.userCorrect.country)
        checkout.billingCountrySelect.select(0)
        checkout.billingRegionSelect.should('be.visible').contains(' --- None --- ')
        checkout.billingRegionSelect.select(0)
        cy.url().should('include', 'checkout/checkout')
        checkout.commentInputField.click()
        checkout.continueButton.should('be.visible')
        checkout.continueButton.click({ timeout: 4000 })
        checkout.billingFirstNameErrorMessage.should('exist').contains(FIRST_NAME_ERROR_MESSAGE)
        checkout.billingLastNameErrorMessage.should('exist').contains(LAST_NAME_ERROR_MESSAGE)
        checkout.billingAddressFirstLineErrorMessage.should('exist').contains(ADDRESS_FIRST_LINE_ERROR_MESSAGE)
        checkout.billingAddressCityErrorMessage.should('exist').contains(CITY_ERROR_MESSAGE)
        checkout.billingCountryErrorMessage.should('exist').contains(COUNTRY_ERROR_MESSAGE)
        checkout.billingRegionErrorMessage.should('exist').contains(REGION_ERROR_MESSAGE)
        myOrders.returnButton.scrollIntoView()
        myOrders.returnButton.click({ timeout: 4000 })
    })

    it('Shipping Address', () => {
        checkout.billingAddressSelect.contains(registerData.userCorrect.firstName)
        cart.couponCodeInputField.should('be.visible')
        checkout.shippingAddressSameAsBilling.should('exist')
        checkout.shippingAddressSameAsBilling.click()
        checkout.shippingAddressExistingAddress.should('be.visible')
        checkout.addNewShippingAddress.should('exist')
        checkout.addNewShippingAddress.click({ timeout: 4000 })
        checkout.shippingAddressForm.should('exist')
        shippingAddressInputs()
        checkout.shippingAddressPostCodeInput.clear()
        checkout.shippingAddressCountrySelect.should('be.visible').contains(registerData.userCorrect.country)
        checkout.shippingAddressCountrySelect.select(0)
        checkout.shippingAddressRegionSelect.should('be.visible').contains(' --- None --- ')
        checkout.shippingAddressRegionSelect.select(0)
        cy.url().should('include', 'checkout/checkout')
        checkout.commentInputField.click()
        checkout.commentInputField.type('test')
        checkout.termsAgreement.should('exist').and("contain.text", "I have read and agree to the Terms & Conditions")
        checkout.termsAgreement.click()
        checkout.continueButton.should('be.visible').and("contain.text", "Continue")
        checkout.continueButton.click({ timeout: 4000 })
        checkout.shippingAddressFirstNameErrorMessage.should('exist').contains(FIRST_NAME_ERROR_MESSAGE)
        checkout.shippingAddressLastNameErrorMessage.should('exist').contains(LAST_NAME_ERROR_MESSAGE)
        checkout.shippingaddressFirstLineErrorMessage.should('exist').contains(ADDRESS_FIRST_LINE_ERROR_MESSAGE)
        checkout.shippingAddressCityErrorMessage.should('exist').contains(CITY_ERROR_MESSAGE)
        checkout.shippingAddressCountryErrorMessage.should('exist').contains(COUNTRY_ERROR_MESSAGE)
        checkout.shippingAddressRegionErrorMessage.should('exist').contains(REGION_ERROR_MESSAGE)
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
        billingAddressInputs()
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