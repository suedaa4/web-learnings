const toggleButton = document.getElementById("toggleButton");

const body = document.body;

toggleButton.addEventListener("click", function(){

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        toggleButton.textContent = "Light Mode";
    } else {
        toggleButton.textContent = "Dark Mode";
    }
})