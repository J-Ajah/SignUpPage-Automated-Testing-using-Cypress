///<reference types="Cypress"/>


beforeEach("Todo app test case",()=>{
    cy.visit("http://todomvc.com/examples/react/#/");
})

  describe("Should be todomvc website",()=>{
     it("Check url",()=>{
        cy.url().should("include","react/#/")
   
     }) 
  })

describe("Should be able to type",()=>{
       it("Type in the input box",()=>{
        cy.get('[data-reactid=".0.0.1"]').type('Complete the project {Enter}');
       });
    })
describe("Should be able to edit a task",()=>{
    it("Visit the site and type in a to do task ",()=>{
        cy.get('[data-reactid=".0.0.1"]').type('Wash the car {Enter}');
        cy.get('.view > label').dblclick();
        cy.get('[class="editing"]').should("have.class","editing").clear();
    });

    

})


// describe("Should be able to edit the added task",()=>{
//    it("Visit the site and type in a to do task ",()=>{
//     cy.get('.view > label').type('Complete the project {Enter}');
//    });
// })