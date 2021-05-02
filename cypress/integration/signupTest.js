/// <reference types="cypress" />


context('Validation of sign up form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:90/mywebFolders/SignUpPage/')
    })

    //Positive scenario 
    describe("Positive scenario",()=>{
        it.only("Sucessful submission of form",()=>{
            cy.get('#fname').type("Justice");
            cy.get('#lname-div > input').type("Ajah");
            cy.get('#type').select("Admin");
            cy.get('#email').type("justice.ajah@amiltech.org")
            cy.get('#pass').type("qwertY.899");
            cy.get('#confirmPass').type("qwertY.899")
            cy.get('#btn-submit').click()
        })
    })


    

    
    describe("Negative scenario. When one or more fields are left empty", ()=>{    
    
    
    
        it("Should not submit when all fields are empty",()=>{
            cy.visit('http://localhost:90/mywebFolders/SignUpPage/')
            cy.get('#btn-submit').click();
        });
    
        it("Should not submit sucessfully with the ommission of the first name field",()=>{
            cy.visit('http://localhost:90/mywebFolders/SignUpPage/');
            // cy.get('#fname').type("Justice");
            cy.get('#lname-div > input').type("Ajah");
            cy.get('#type').select("Admin");
            cy.get('#email').type("justice.ajah@amiltech.org")
            cy.get('#pass').type("qwertY.899");
            cy.get('#confirmPass').type("qwertY.899")
            cy.get('#btn-submit').click()
        })
    
        it("Should not submit sucessfully with the ommission of the last name field",()=>{
            cy.visit('http://localhost:90/mywebFolders/SignUpPage/')
            cy.get('#fname').type("Justice");
            // cy.get('#lname-div > input').type("Ajah");
            cy.get('#type').select("Admin");
            cy.get('#email').type("justice.ajah@amiltech.org")
            cy.get('#pass').type("qwertY.899");
            cy.get('#confirmPass').type("qwertY.899")
            cy.get('#btn-submit').click()
        })
    
        it("Should not submit sucessfully with the ommission of an account type",()=>{
            cy.visit('http://localhost:90/mywebFolders/SignUpPage/')
            cy.get('#fname').type("Justice");;
            // cy.get('#type').select("Admin");
            cy.get('#email').type("justice.ajah@amiltech.org")
            cy.get('#pass').type("qwertY.899");
            cy.get('#confirmPass').type("qwertY.899")
            cy.get('#btn-submit').click()
        })
    
        it("Should not submit sucessfully with the ommission of an email",()=>{
            cy.visit('http://localhost:90/mywebFolders/SignUpPage/')
            cy.get('#fname').type("Justice");
            cy.get('#lname-div > input').type("Ajah");
            cy.get('#type').select("Admin");
            // cy.get('#email').type("justice.ajah@amiltech.org")
            cy.get('#pass').type("qwertY.899");
            cy.get('#confirmPass').type("qwertY.899")
            cy.get('#btn-submit').click()
        })
    
    
        it("Should not submit sucessfully with the ommission of the password field",()=>{
            cy.visit('http://localhost:90/mywebFolders/SignUpPage/')
            cy.get('#fname').type("Justice");
            cy.get('#lname-div > input').type("Ajah");
            cy.get('#type').select("Admin");
            cy.get('#email').type("justice.ajah@amiltech.org")
            // cy.get('#pass').type("qwertY.899");
            cy.get('#confirmPass').type("qwertY.899")
            cy.get('#btn-submit').click()
        })
    
        it("Should not submit sucessfully when confirm password is empty",()=>{
            cy.visit('http://localhost:90/mywebFolders/SignUpPage/')
            cy.get('#fname').type("Justice");
            cy.get('#lname-div > input').type("Ajah");
            cy.get('#type').select("Admin");
            cy.get('#email').type("justice.ajah@amiltech.org")
            cy.get('#pass').type("qwertY.899");
            // cy.get('#confirmPass').type("qwertY.899")
            cy.get('#btn-submit').click()
        })
    
        
       
       
    })

   
    

})

