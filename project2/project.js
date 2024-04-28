function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}
// Function to toggle the completed status of a task
function toggleTaskCompletion(event) {
    // Toggle the 'completed' class on the clicked task item
    event.target.classList.toggle('completed');
}

// Function to add a new task to the list
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;
        // Add event listener to toggle completion status when the task is clicked
        li.addEventListener('click', toggleTaskCompletion);
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}
