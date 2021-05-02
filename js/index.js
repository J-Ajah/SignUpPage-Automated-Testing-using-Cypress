
let person={
    fname:"" ,
    lname: "",
    email : "",
    password : "",
    confirmPass: "",
    type: ""
}


const togglePass = document.querySelector('#togglePassword');
const togglePass2 = document.querySelector('#togglePassword2')
const password = document.querySelector('#pass');
const confirmPass = document.querySelector('#confirmPass');




const validate = ()=> {
     let fields = Array.from(document.querySelectorAll("input"));
     let  select = document.querySelector('#type');

     let errorMsg = document.querySelector(".btn-subDiv p");
     
     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     let passReg=   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/;

    
     person.fname = fields[0].value;
     person.lname = fields[1].value;
     person.email = fields[2].value;
     person.password = fields[3].value;
     person.confirmPass = fields[4].value;
     person.type = select.value ;


     
     if(person.fname != "" && person.lname != "" && person.email != "" && person.password != "" && person.confirmPass != "" && person.type != ""){

        //validates that the email is a valid email 
         if(!person.email.match(regex)){
            const mail =  document.getElementById("email");
            mail.style.borderColor = "red";
            return false;
         }
         
         //validates the inputed password
         //must contain a special character, a number and a capital letter
         if(!person.password.match(passReg)){
            const pass =  document.getElementById("pass");
            pass.style.borderColor = "red";
            document.querySelector("#pass-erorr").classList.remove("hide");
            return false;
         }

       console.log(person.password === person.confirmPass)
         if(person.password != person.confirmPass){
            confirmPass.style.borderColor ="red";
            return false;
         }


           document.querySelector(".form").classList.add("hide");  
           document.querySelector(".caption").classList.add("hide");
           document.querySelector(".sucessMsg").classList.add("show");
        return false;
     }
   

    errorMsg.classList.remove("hide");
    // window.location = "index.html";
   //  e.perventDefault();
  
}






// const button = document.querySelector("#btn-submit").addEventListener("click",validate);
document.querySelector("#btn-submit").addEventListener("click",function(e){
   validate(e);
})



function   togglePassword(e) {
    // toggle the type attribute
    const type = e.getAttribute('type') === 'password' ? 'text' : 'password';
    e.setAttribute('type', type);
    // toggle the eye slash icon
    e.nextElementSibling.classList.toggle('fa-eye-slash');
}
//toggles the password's visibility
togglePass.addEventListener('click', function(e){
     const input = e.currentTarget.previousElementSibling;
    togglePassword(input);
});
togglePass2.addEventListener('click', function(e){
   const input = e.currentTarget.previousElementSibling;
  togglePassword(input);
});