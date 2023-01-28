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
}
export default new ProductPage()