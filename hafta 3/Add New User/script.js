const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const createUser = document.getElementById("createUser");
const showResult = document.getElementById("showResult");

createUser.addEventListener("click", async function() {
    
 try{
    const name = inputName.value;
    const email = inputEmail.value;

    if(name === "" || email === ""){
        throw new Error("Please fill in all fields.");
    }

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
            name,
            email
        })
        }      
    )
    
    const data = await response.json()
    showResult.textContent = "User created successfully!";
    console.log(data);

 } catch(error){
    showResult.textContent = error.message;
 }
})