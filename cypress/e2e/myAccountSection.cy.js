/// <reference types="cypress" />
import homePage from '../../pageObjects/homePage'
import singleRegister from '../../pageObjects/singleRegister'
import registerData from '../fixtures/registerData.json'
import myAccountSection from '../../pageObjects/myAccountSection'
import editAccount from '../../pageObjects/editAccount'
import addressBook from '../../pageObjects/addressBook'
import wishList from '../../pageObjects/wishList'
import productPage from '../../pageObjects/productPage'
import cart from '../../pageObjects/cart'

describe('My Account section tests', () => {
    beforeEach(() => {
        cy.login()
        myAccountSection.myAccountPageLink()
    })

    it('My Account cards visibility', () => {
        myAccountSection.editAccountInformationLink.should('be.visible')
        myAccountSection.changeYourPasswordLink.should('be.visible')
        myAccountSection.addressBookLink.should('be.visible')
        myAccountSection.wishListLink.should('be.visible')
        myAccountSection.newsletterOptionsLink.should('be.visible')
        myAccountSection.orderHistoryLink.should('be.visible')
        myAccountSection.downloadsLink.should('be.visible')
        myAccountSection.rewardPointsLink.should('be.visible')
        myAccountSection.returnRequestsHistoryLink.should('be.visible')
        myAccountSection.yourTransactionsLink.should('be.visible')
        myAccountSection.recurringPaymentsLink.should('be.visible')
        myAccountSection.registerForAffiliateLink.should('be.visible')
        myAccountSection.rightColumnLogoutLink.should('be.visible')
    })

    it('Edit your account information', () => {
        myAccountSection.myAccountCard.should('be.visible').and('contain.text', 'My Account')
        myAccountSection.editAccountInformationLink.should('be.visible')
        myAccountSection.editAccountInformationLink.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'My Account Information')
        editAccount.phoneNumberHelpMessage.should('be.visible').and('contain.text', 'Enter valid phone number with country code!')
        singleRegister.firstNameInput.clear()
        singleRegister.lastNameInput.clear()
        singleRegister.emailInput.clear()
        singleRegister.telephoneNumberInput.clear()
        editAccount.backButton.should('be.visible')
        singleRegister.continueButton.should('be.visible')
        singleRegister.continueButton.click()
        editAccount.firstNameErrorMessage.should('be.visible').and('contain.text', 'First Name must be between 1 and 32 characters!')
        editAccount.lastNameErrorMessage.should('be.visible').and('contain.text', 'Last Name must be between 1 and 32 characters!')
        editAccount.emailErrorMessage.should('be.visible').and('contain.text', 'E-Mail Address does not appear to be valid!')
        editAccount.telephoneErrorMessage.should('be.visible').and('contain.text', 'Telephone must be between 3 and 32 characters!')
        singleRegister.firstNameInput.clear().type(registerData.userCorrect.firstName)
        singleRegister.firstNameInput.type('{selectall}')
        singleRegister.firstNameInput.should('contain.value', registerData.userCorrect.firstName)
        singleRegister.lastNameInput.clear().type(registerData.userCorrect.lastName)
        singleRegister.lastNameInput.type('{selectall}')
        singleRegister.lastNameInput.should('contain.value', registerData.userCorrect.lastName)
        singleRegister.emailInput.clear().type(registerData.userCorrect.mailAddress)
        singleRegister.telephoneNumberInput.clear().type(registerData.userCorrect.phoneNumber)
        singleRegister.telephoneNumberInput.type('{selectall}')
        singleRegister.telephoneNumberInput.should('contain.value', registerData.userCorrect.phoneNumber)
        singleRegister.continueButton.click()
        homePage.successMessage.should('be.visible').and('contain.text', 'Success: Your account has been successfully updated.')
    })

    it('Change your password', () => {
        myAccountSection.myAccountCard.should('be.visible').and('contain.text', 'My Account')
        myAccountSection.changeYourPasswordLink.should('be.visible')
        myAccountSection.changeYourPasswordLink.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Change Password')
        singleRegister.continueButton.should('be.visible')
        singleRegister.continueButton.click()
        editAccount.passwordMessage.should('be.visible').and('contain.text', 'Password must be between 4 and 20 characters!')
        singleRegister.passwordInput.type(registerData.userCorrect.password, { sensitive: true })
        singleRegister.confirmPasswordInput.type(registerData.userIncorrect.password, { sensitive: true })
        singleRegister.continueButton.click()
        editAccount.confirmPasswordMessage.should('be.visible').and('contain.text', 'Password confirmation does not match password!')
        singleRegister.passwordInput.clear().type(registerData.userCorrect.password, { sensitive: true })
        singleRegister.confirmPasswordInput.clear().type(registerData.userCorrect.password, { sensitive: true })
        singleRegister.continueButton.click()
        homePage.successMessage.should('be.visible').and('contain.text', 'Success: Your password has been successfully updated.')
    })

    it('Address Book entries', () => {
        myAccountSection.myAccountCard.should('be.visible').and('contain.text', 'My Account')
        myAccountSection.addressBookLink.should('be.visible')
        myAccountSection.addressBookLink.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Address Book Entries')
        addressBook.addNewAddressButton.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Add Address')
        addressBook.postCodeInput.click()
        singleRegister.continueButton.click()
        editAccount.firstNameErrorMessage.should('be.visible').and('contain.text', 'First Name must be between 1 and 32 characters!')
        editAccount.lastNameErrorMessage.should('be.visible').and('contain.text', 'Last Name must be between 1 and 32 characters!')
        addressBook.addressFirstLineErrorMessage.should('be.visible').and('contain.text', 'Address must be between 3 and 128 characters!')
        addressBook.cityErrorMessage.should('be.visible').and('contain.text', 'City must be between 2 and 128 characters!')
        addressBook.postCodeErrorMessage.should('be.visible').and('contain.text', 'Postcode must be between 2 and 10 characters!')
        addressBook.regionStateErrorMessage.should('be.visible').and('contain.text', 'Please select a region / state!')
        singleRegister.firstNameInput.type(registerData.userCorrect.firstName)
        singleRegister.lastNameInput.type(registerData.userCorrect.lastName)
        addressBook.companyNameInput.type(registerData.userCorrect.companyName)
        addressBook.addressFirstLineInput.type(registerData.userCorrect.addressFirstLine)
        addressBook.addressSecondLineInput.type(registerData.userCorrect.addressSecondLine)
        addressBook.cityInput.type(registerData.userCorrect.city)
        addressBook.postCodeInput.type(registerData.userCorrect.postCode)
        addressBook.countrySelect.select(registerData.userCorrect.country)
        addressBook.regionStateSelect.select(registerData.userCorrect.region)
        addressBook.defaultAddressYes.should('be.visible')
        addressBook.defaultAddressNo.should('be.visible')
        addressBook.defaultAddressYes.click()
        singleRegister.continueButton.click()
        homePage.successMessage.should('be.visible').and('contain.text', 'Your address has been successfully added')
        addressBook.addressSummary.should('be.visible').and('contain.text', 'FirstLineOfAddress')
        addressBook.addressDeleteButton.click()
        addressBook.warningMessage.should('contain.text', 'Warning: You can not delete your default address!')
        addressBook.defaultAddressEditButton.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Edit Address')
        addressBook.defaultAddressYes.click()
        singleRegister.continueButton.click()
        homePage.successMessage.should('be.visible').and('contain.text', 'Your address has been successfully updated')
        addressBook.addressDeleteButton.click()
        homePage.successMessage.should('be.visible').and('contain.text', 'Your address has been successfully deleted')
    })

    it('Modify wish list', () => {
        myAccountSection.myAccountCard.should('be.visible').and('contain.text', 'My Account')
        productPage.simpleProductPage()
        productPage.addToWishListButton.click()
        productPage.successMessageTitle.should('be.visible').and('contain.text', 'Wish List ')
        productPage.goToWishListButton.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'My Wish List')
        wishList.productTable.should('be.visible')
        wishList.wishListAddToCartButton.click()
        wishList.addedToCartMessage.should('be.visible').and('contain.text', 'Success: You have added')
        productPage.successMessageGoToCartButton.click()
        cart.deleteFromCartButton.should('be.visible')
        cart.deleteFromCartButton.click()
        cart.emptyCartContent.should('be.visible').and('contain.text', 'Your shopping cart is empty!')
        myAccountSection.myAccountPageLink()
        myAccountSection.myAccountCard.should('be.visible').and('contain.text', 'My Account')
        myAccountSection.wishListLink.should('be.visible')
        myAccountSection.wishListLink.click()
        wishList.wishListRemoveButton.click()
        homePage.successMessage.should('be.visible').and('contain.text', 'Success: You have modified your wish list!')
    })

    it('Newsletter Subscription', () => {
        myAccountSection.myAccountCard.should('be.visible').and('contain.text', 'My Account')
        myAccountSection.newsletterOptionsLink.should('be.visible')
        myAccountSection.newsletterOptionsLink.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Newsletter Subscription')
        myAccountSection.newsletterYesRadio.click()
        singleRegister.continueButton.click()
        homePage.successMessage.should('be.visible').and('contain.text', 'Success: Your newsletter subscription has been successfully updated!')
        myAccountSection.newsletterOptionsLink.click()
        singleRegister.pageTitle.should('be.visible').and('contain.text', 'Newsletter Subscription')
        myAccountSection.newsletterNoRadio.click()
        singleRegister.continueButton.click()
        homePage.successMessage.should('be.visible').and('contain.text', 'Success: Your newsletter subscription has been successfully updated!')
    })
})