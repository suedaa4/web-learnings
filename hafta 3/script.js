async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const user = await response.json();

    for(const user of users) {
        console.log(users[0].name);
    }
}