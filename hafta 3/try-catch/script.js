const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener("click", function(){
  try{  

    if(firstNumber.value === "" || secondNumber.value === ""){
      throw new Error("Lütfen iki sayıyı da giriniz.")
    }

    const number1 = Number(firstNumber.value);
    const number2 = Number(secondNumber.value);

    if (number2 === 0){
      throw new Error("0'a bölme yapılamaz.")
    }

    result.textContent = number1 / number2;
  }
  catch(error){
    result.textContent = error.message
  }
})