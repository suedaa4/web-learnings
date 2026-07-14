const users = [
    {
        name: "Sueda",
        age: 22,
    },
    {
        name: "Ahmet",
        age: 25,
    },
    {
        name: "Ayşe",
        age: 20
    }
];


/* for(const user of users){
    console.log(`${user.name} (${user.age})`);
}  */

    const formattedUsers = users.map(function(user){
        return `${user.name} (${user.age})`;
    });