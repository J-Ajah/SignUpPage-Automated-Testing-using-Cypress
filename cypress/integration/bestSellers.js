///<reference types="Cypress"/>


describe("Automation Test Store Product Test",()=>{
    beforeEach("Todo app test case",()=>{
        cy.visit("https://automationteststore.com/");
    });

    it.only("Checks if product displayed can be added to cart Items  ",()=>{
        cy.get('#block_frame_bestsellers_1771 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img').click()
        .get('.cart').click().get('tbody > :nth-child(2) > :nth-child(2) > a').contains("shock")
    });

    it.only("Validates that the product can be added to the cart items",()=>{
        cy.get('#block_frame_bestsellers_1771 > .thumbnails > :nth-child(3) > .thumbnail > :nth-child(1) > img').click()
        .get('.cart').click().get('tbody > :nth-child(2) > :nth-child(2) > a').contains("Spray").get('#cart_checkout1').click();
    });

    it.only("Validates that the product can be added to cart Items for checkout",()=>{
        cy.get('#block_frame_bestsellers_1771 > .thumbnails > :nth-child(4) > .thumbnail > :nth-child(1) > img').click()
        .get('.cart').click()
    })

})
