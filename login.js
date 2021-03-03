function validateform()
{
 const userName = document.getElementById("loginUsername").value;
 const password = document.getElementById("security").value;

 let password_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
 let letters = /^[A-Za-z]+$/;
 let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

 if (userName==="")
 {  
    alert("Username can't be blank");   
 }
 else if(!letters.test(userName))
	{
		alert("UserName field requires only alphabet characters"); 
	}
 else if(password==="")
	{
		alert("Please enter your Password");
	}
 else if(!password_expression.test(password))
	{
		alert ("Upper case, Lower case, Special character and Numeric letter are required in Password field");
	}
 else if(password.length<8)
   {  
    alert("Password must be at least 8characters long.");  
      
    }  
 else
	{				                            
		   alert("Thank You! You have successfully logged in.");
		   // Redirecting to the studentprofile page. 
		   window.location = "studentprofile.html"; 
	}
} 

/* function setFormMessage(formElement, type, message){
    const messageElement= formElement.querySelector(".form-message")

    messageElement.textContent =message;
    // messageElement.classList.remove("form-message-success", "form-message-error");
    messageElement.classList.add("form-message-${type}")

    setFormMessage(loginForm,"success","You are logged in!")

}

function setInputError(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;

}

function clearInputError(inputElement) {
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";

}
document.addEventListener("DOMContentLoaded",() => {
    const loginForm = document.querySelector("#login");

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
    //  Headers, perform the AJAX/JSON/fetch login

      setFormMessage(loginForm, "error", "Invalid username/password combination");
    });
    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id==="loginUsername" && e.target.value.length >0 && e.target.value.length <4)

            setInputError(inputElement,"Username must be more than 4 characters in length.")


        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement); */
        /* });
    });
}); */