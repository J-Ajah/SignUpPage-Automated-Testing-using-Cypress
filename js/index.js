
let person={
    name: "",
    email : "",
    password : "",
    type: ""
}


const togglePass = document.querySelector('#togglePassword');
const password = document.querySelector('#pass');





const validate = ()=> {
     let fields = Array.from(document.querySelectorAll("input"));
     let  select = document.querySelector('#type');

     
     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     let passReg=   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/;
    
     person.name = fields[0].value;
     person.email = fields[1].value;
     person.password = fields[2].value;
     person.type = select.value ;

     let status, tag ;

     //gets the password field
     const pass =  document.getElementById("pass");

    for(let i =0; i < fields.length; i++){
       if(fields[i].value == ""){
         status =   showMessage(fields[i]);
       }
    }

          

    
     if(!status){
        if(person.name != ""){
         //   debugger
           if(person.name.length < 2 || person.name.length > 10){
             nameError =  document.getElementById("nameError");
             nameError.innerText = "username should be more than 1 character and a maximum of 10 characters";
             nameError.style.display ="block";
             return false
           }else{
            let text = fields[0].parentElement.nextElementSibling;
            text.style.display ="none";
            fields[0].style.border = "solid 0.8px rgb(207, 206, 206)";
           }
          
        }
        else{
           return false;
        }
          
        //validates that the email is a valid email 
         if(!person.email.match(regex)){
            const mail =  document.getElementById("email");
            mail.style.borderColor = "red";
            tag = mail.parentElement.nextElementSibling;
            tag.innerHTML="Enter a valid email"
            tag.style.display ="block";

            

            return false;
         }else{
             mail =  document.getElementById("email");
            clearStyle(mail);
         }
         
         //validates the inputed password
         //must contain a special character, a number and a capital letter
         if(!person.password.match(passReg)){
            pass.style.borderColor = "red";
            return false;
         }else{
            pass.style.borderColor = "";
         }

     }


   


     document.querySelector("form").innerHTML = "<img class=\"check\"  src=\"assets/check.png\" /> "

   

  
    // window.location = "index.html";
   // e.perventDefault();
  
}





// const button = document.querySelector("#btn-submit").addEventListener("click",validate);
document.querySelector("#btn-submit").addEventListener("click",function(e){
   validate(e);
})

//shows error message 
function showMessage(elem){
  let tag = elem.parentElement.nextElementSibling;
  tag.style.display ="block";
  elem.style.borderColor = "red";
  return false;
}

//Clears the validation styles
function clearStyle(elem){
   console.log(elem)
    let text = elem.parentElement.nextElementSibling;
    elem.style.border = "solid 0.8px rgb(207, 206, 206)";
    text.style.display ="none";

    
}



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
