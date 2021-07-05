let submitButton = document.querySelector("#submit");

function validateEmail(email){
   const emailRegex = /\S+@\S+\.\S+/;
   return emailRegex.test(email);
}

function formValidate(ev){
   let input = document.querySelectorAll(".inpt");
   let invalidMsg = document.querySelectorAll(".invalid-msg");
   let invalidIcon = document.querySelectorAll(".inv");
   let email = document.querySelector("#email").value;
   

   for(let i=0; i<input.length; i++){
      if(input[i].value == ""){
         input[i].classList.add("invalid");
         invalidMsg[i].style.display = "block";
         invalidIcon[i].classList.add("icon");
         if(!validateEmail(email)){
            input[2].classList.add("invalid");
            invalidMsg[2].style.display = "block";
            invalidIcon[2].classList.add("icon");
         }
         ev.preventDefault();
      }else{
         input[i].classList.remove("invalid");
         invalidMsg[i].style.display = "none";
         invalidIcon[i].classList.remove("icon");
      }
   }
}

submitButton.addEventListener("click", formValidate)
