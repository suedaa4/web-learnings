const loadUsers = document.getElementById("loadUsers");
const userList = document.getElementById("userList");

loadUsers.addEventListener("click", async function(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    for(const user of users){
        const li = document.createElement("li");

        li.textContent = user.name;

        userList.appendChild(li);

    }
})