///<reference types="Cypress"/>

describe("Automation Test Store Product Test",()=>{
    beforeEach("Todo app test case",()=>{
        cy.visit("https://automationteststore.com/");
    });

        it("First featured product test",()=>{

             cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(3) > .thumbnail > :nth-child(1) > img')
             .click().get('#product_quantity').clear().type("5").get('.productfilneprice').contains("$28.00")
             .get('.cart').click().get('tbody > :nth-child(2) > :nth-child(2) > a').contains("Bamba").get('.nav-pills > :nth-child(1) > .active').click();
        });


        it("Second featured product test",()=>{
            cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img').click().get('#product_quantity').clear().type("3")
            .get('.cart').click().get('tbody > :nth-child(2) > :nth-child(2) > a').contains("Stick");
       });


       it("Thhird featured product test",()=>{
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(4) > .thumbnail > :nth-child(1) > img').click()
        .get('.total-price').contains("$38.50").get('.cart').click().get('tbody > :nth-child(2) > :nth-child(2) > a').contains("Loose")
   });


        
})