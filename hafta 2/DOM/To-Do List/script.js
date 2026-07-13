const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    
    if(taskInput.value.trim() === ""){
     return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value.trim();

     const deleteButton = document.createElement("button")
     deleteButton.textContent = "Delete";

     
    deleteButton.addEventListener("click", function() {
        newTask.remove();
    });
    
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    taskInput.value = "";

});

