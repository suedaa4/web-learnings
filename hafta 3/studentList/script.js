const showButton = document.getElementById("showButton")
const studentList = document.getElementById("studentList")

const students = [
    {
        name: "Sueda",
        grade: 95,
        department: "Software Engineering"
    },
    {
        name: "Ahmet",
        grade: 82,
        department: "Computer Engineering"
    },
    {
        name: "Ayşe",
        grade: 90,
        department: "Artificial Intelligence"
    }
];

showButton.addEventListener("click", function(){

    studentList.innerHTML = "";

    for(const student of students){
        console.log(student.name)

        const newStudent = document.createElement("li");
        
        newStudent.textContent = 
         `${student.name} - ${student.department} (${student.grade})`;

         studentList.appendChild(newStudent);
    }
});