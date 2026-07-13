const textInput = document.getElementById("textInput");
const count = document.getElementById("count");

textInput.addEventListener("input", function(){
    console.log(textInput.value.length);
    count.textContent = "Characters: " + textInput.value.length;
})