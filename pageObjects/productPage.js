class ProductPage {
    simpleProductPage() {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=18&product_id=28')
    }

    configurableProductPage() {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=18&product_id=30')
    }

    get addToWishListButton() {
        return cy.get('.thumbnail-left .btn')
    }

    get goToWishListButton() {
        return cy.xpath("//a[contains(.,'Wish List')]")
    }

    get availabilityBadgeInStock() {
        return cy.get('.badge-success')
    }

    get availabilityBadgePreOrder() {
        return cy.get('.badge-danger')
    }

    get price() {
        return cy.get('.price-new')
    }

    get priceInformation() {
        return cy.get('.price-info > .far')
    }

    get priceTooltip() {
        return cy.get('.popover-body')
    }

    get quantityInputField() {
        return cy.xpath("//div[@class='entry-col col-12 flex-wrap flex-sm-nowrap']//input[@name='quantity']")
    }

    get minusButton() {
        return cy.get('#entry_216841 > .input-group > .input-group-prepend > .btn > .fas')
    }

    get plusButton() {
        return cy.get('#entry_216841 > .input-group > .input-group-append > .btn > .fas')
    }

    get addToCartButton() {
        return cy.get('.order-lg-1 > .text')
    }

    get buyNowButton() {
        return cy.get('.btn-buynow')
    }

    get compareProductButton() {
        return cy.get('.btn-sm')
    }

    get proceedToCompareListButton() {
        return cy.get('.toast-body > .btn')
    }

    get compareProductCheckMark() {
        return cy.get('.btn-sm .fa-check')
    }

    get successMessageBody() {
        return cy.get('.toast-body')
    }

    get successMessageTitle() {
        return cy.get('.toast-header')
    }

    get successMessageCloseButton() {
        return cy.xpath("//span[.='×']")
    }

    get successMessageGoToCartButton() {
        return cy.get('.form-row .btn-primary')
    }

    get successMessageGoToCheckoutButton() {
        return cy.get('.form-row .btn-secondary')
    }

    get successMessageCartLink() {
        return cy.xpath("//a[.='shopping cart']")
    }

    get askQuestionButton() {
        return cy.get('.fa-question-circle.icon')
    }

    get askQuestionContentBody() {
        return cy.get('.modal-md .modal-body')
    }

    get askQuestionHeader() {
        return cy.get('.modal-header')
    }

    get askQuestionNameInput() {
        return cy.get("[placeholder='Your name']")
    }

    get askQuestionMailInput() {
        return cy.get("[placeholder='Your email']")
    }

    get askQuestionSubjectInput() {
        return cy.get("[name='subject']")
    }

    get askQuestionMessageInput() {
        return cy.get("[name='message']")
    }

    get askQuestionSendButton() {
        return cy.xpath("//button[@class='btn btn-secondary btn-lg']")
    }

    get askQuestionNameErrorMessage() {
        return cy.get(':nth-child(1) > .error')
    }

    get askQuestionEmailErrorMessage() {
        return cy.get(':nth-child(2) > .error')
    }

    get askQuestionSubjectErrorMessage() {
        return cy.get(':nth-child(3) > .error')
    }

    get askQuestionMessageErrorMesssage() {
        return cy.get(':nth-child(4) > .error')
    }

    get reviewRatingGroup() {
        return cy.get('.select-rating')
    }

    get reviewRatingFiveStars() {
        return cy.get('[for="rating-5-216860"]')
    }

    get reviewSuccessMessage() {
        return cy.get('#form-review > .alert')
    }

    get reviewNameInput() {
        return cy.get('#input-name')
    }

    get reviewMessageInput() {
        return cy.get('#input-review')
    }

    get reviewSendButton() {
        return cy.get('#button-review')
    }
}
export default new ProductPage()