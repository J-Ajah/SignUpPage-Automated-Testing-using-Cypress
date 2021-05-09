///<reference types="Cypress"/>

describe("Automation Test Store Product Test",()=>{

    beforeEach("Todo app test case",()=>{
        cy.visit("https://automationteststore.com/");
    })
     
    it("Ensures that the latest product is clickable for more info",()=>{
        cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(4) > .thumbnail > :nth-child(2) > img').click().get('.nostock').should("have.class","nostock");
    })

    it("Validate that the product can be added to the cart",()=>{
        cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(2) > .thumbnail > :nth-child(2) > img').click().get('.cart')
        .click().get('tbody > :nth-child(2) > :nth-child(2) > a').contains("Cells")

    });

    it("Checks if the item is can be added to cart Items sucessfully",()=>{
        cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(3) > .thumbnail > :nth-child(1) > img').click().get('.cart')
        .click().get('.navbar-collapse').contains("Cream");
    })

   


})