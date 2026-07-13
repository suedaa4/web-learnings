const password = document.getElementById("password");
const showButton = document.getElementById("showButton");

showButton.addEventListener("click", function(){
    
    if(password.type === "password"){
    password.type = "text";
    showButton.textContent = "Hide Password";
    showButton.style.backgroundColor = "red";
    }
    else {
        password.type = "password";
        showButton.textContent = "Show Password";
          showButton.style.backgroundColor = "blue";
    }
});

