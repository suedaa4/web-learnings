const title = document.getElementById("title");

const changeButton = document.getElementById("changeButton")

let isRed = false

changeButton.addEventListener("click", function() {
   
    if(isRed == false) {
         title.style.color = "red"
         isRed = true;
         
title.textContent = "Color changed!";
    }
    else {
        title.textContent = "Click the button!"
        title.style.color = "blue";
        isRed = false;
    }
});