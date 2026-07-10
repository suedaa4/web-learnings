
const counterValue = document.getElementById("counterValue");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

let count = 0;
increase.addEventListener("click", function() {
    count++;

    counterValue.textContent = count;

    if (count === 10){
        counterTitle.textContent = "Mximum Reached!";
    }
    else {
        counterTitle.textContent = "Counter";
    }
});

decrease.addEventListener("click", function(){
    if (count > 0) {
        count--;
        counterValue.textContent = count;
    }

    if (count === 0) {
        counterTitle.textContent = "Counter";
    }
})

reset.addEventListener("click", function () {
     count = 0;
    counterValue.textContent = count;
    counterTitle.textContent = "Counter";
});