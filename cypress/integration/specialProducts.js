/// <reference types="Cypress"/>


describe("Automation Test Store Product Test",()=>{
    beforeEach("Todo app test case",()=>{
        cy.visit("https://automationteststore.com/");
    });

    it.only("Checking if the cart button is clickable from the home page",()=>{
        cy.get('#block_frame_special_1772 > .thumbnails > :nth-child(3) > .thumbnail > .pricetag > .productcart > .fa').click();
        cy.get('#block_frame_bestsellers_1771 > .thumbnails > :nth-child(4) > .thumbnail > :nth-child(1) > img').click().get('.cart').click();
        cy.get('tbody > :nth-child(3) > :nth-child(4)').contains("$42.00")
     });

     it.only("Checks if the special product is clickable from the home page",()=>{
        cy.get(':nth-child(1) > .thumbnail > :nth-child(2) > img').click();
        cy.url().should("have.string","product_id=65")
        
     });

     it.only("Checks if the special product is clickable from the home page",()=>{
        cy.get('#block_frame_special_1772 > .thumbnails > :nth-child(2) > .thumbnail > :nth-child(2) > img').click()
        cy.get('[id="option321"]').select("1.7 oz").should("have.value","663")
     });

     

})