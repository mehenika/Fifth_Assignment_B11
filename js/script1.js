// Changing background color
const colors = ['coral', 'purple', 'aquamarine', '#E0FFFF', '#90EE90', '20B2AA', '#87CEFA', 'lime', 'linen', 'olive', 'mint'];
function changeBackgroundColor(){
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

// Creating real-time date

function updateDate() {
    const dateElement = document.getElementById("current-date");
    const today = new Date();

    const weekday = today.toLocaleDateString('en-US', { weekday: 'short' });
    const month = today.toLocaleDateString('en-US', { month: 'short' });
    const day = today.getDate();
    const year = today.getFullYear();

    dateElement.innerHTML = `${weekday}, <br> <strong> ${month} ${day} ${year}</strong>`;
}

updateDate();



// Counting the number of completed tasks

let completedTasksCount = 0;

// Add this function to check if all tasks are completed and show a final message
function checkAllTasksCompleted() {
    if (completedTasksCount === 6) {
        alert("Congrats! You have completed all the current tasks.");
    }
}

// Completed Button Alert, decrementing number of tasks and incrementing completed tasks
function showAlert() {
    alert("Board updated successfully");
    // decrementing number of tasks
    let numberTasks = document.getElementById("num-task");
    let currentNumber = parseInt(numberTasks.textContent);
    numberTasks.textContent = currentNumber - 1;

    // incrementing number of completing tasks
    let completedTasks = document.getElementById("com-task");
    let currentNumber2 = parseInt(completedTasks.textContent);
    completedTasks.textContent = currentNumber2 + 1;
}

// changing color of the button to show it's disabled for Task 1
function changeColor() {
    let button = document.getElementById("btn-1");
    button.classList.remove("bg-accent", "text-white");
    button.classList.add("bg-gray-200", "text-gray-500");
}

// adding the message in activity log with dynamic time
function addCompletionMessage() {
    let activityLog = document.getElementById("task-message");
    let taskName = document.getElementById("task1").textContent;

    // adding time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let currentTime = hours + ':' + minutes + ':' + seconds + ' ' + amPm;

    let messageDiv = document.createElement("div");
    messageDiv.className = "p-3 bg-secondary rounded-lg text-xs";
    messageDiv.textContent = `You have completed the task ${taskName} at ${currentTime}`;

    activityLog.appendChild(messageDiv);

    // Incrementing the completed task number   
    completedTasksCount++;
    checkAllTasksCompleted();
}

// changing color of the buttons to show it's disabled for Task 2
function changeColor2() {
    let button = document.getElementById("btn-2");
    button.classList.remove("bg-accent", "text-white");
    button.classList.add("bg-gray-200", "text-gray-500");
}

// adding the message in activity log with dynamic time
function addCompletionMessage2() {
    let activityLog = document.getElementById("task-message");
    let taskName = document.getElementById("task2").textContent;

    // adding time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let currentTime = hours + ':' + minutes + ':' + seconds + ' ' + amPm;

    let messageDiv = document.createElement("div");
    messageDiv.className = "p-3 bg-secondary rounded-lg text-xs";
    messageDiv.textContent = `You have completed the task ${taskName} at ${currentTime}`;

    activityLog.appendChild(messageDiv);

    // Incrementing the completed task number   
    completedTasksCount++;
    checkAllTasksCompleted();
}

// changing color of the buttons to show it's disabled for Task 3
function changeColor3() {
    let button = document.getElementById("btn-3");
    button.classList.remove("bg-accent", "text-white");
    button.classList.add("bg-gray-200", "text-gray-500");
}

// adding the message in activity log with dynamic time
function addCompletionMessage3() {
    let activityLog = document.getElementById("task-message");
    let taskName = document.getElementById("task3").textContent;

    // adding time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let currentTime = hours + ':' + minutes + ':' + seconds + ' ' + amPm;

    let messageDiv = document.createElement("div");
    messageDiv.className = "p-3 bg-secondary rounded-lg text-xs";
    messageDiv.textContent = `You have completed the task ${taskName} at ${currentTime}`;

    activityLog.appendChild(messageDiv);

    // Incrementing the completed task number   
    completedTasksCount++;
    checkAllTasksCompleted();
}

// changing color of the buttons to show it's disabled for Task 4
function changeColor4() {
    let button = document.getElementById("btn-4");
    button.classList.remove("bg-accent", "text-white");
    button.classList.add("bg-gray-200", "text-gray-500");
}

// adding the message in activity log with dynamic time
function addCompletionMessage4() {
    let activityLog = document.getElementById("task-message");
    let taskName = document.getElementById("task4").textContent;

    // adding time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let currentTime = hours + ':' + minutes + ':' + seconds + ' ' + amPm;

    let messageDiv = document.createElement("div");
    messageDiv.className = "p-3 bg-secondary rounded-lg text-xs";
    messageDiv.textContent = `You have completed the task ${taskName} at ${currentTime}`;

    activityLog.appendChild(messageDiv);

    // Incrementing the completed task number   
    completedTasksCount++;
    checkAllTasksCompleted();
}

// changing color of the buttons to show it's disabled for Task 5
function changeColor5() {
    let button = document.getElementById("btn-5");
    button.classList.remove("bg-accent", "text-white");
    button.classList.add("bg-gray-200", "text-gray-500");
}

// adding the message in activity log with dynamic time
function addCompletionMessage5() {
    let activityLog = document.getElementById("task-message");
    let taskName = document.getElementById("task5").textContent;

    // adding time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let currentTime = hours + ':' + minutes + ':' + seconds + ' ' + amPm;

    let messageDiv = document.createElement("div");
    messageDiv.className = "p-3 bg-secondary rounded-lg text-xs";
    messageDiv.textContent = `You have completed the task ${taskName} at ${currentTime}`;

    activityLog.appendChild(messageDiv);

    // Incrementing the completed task number   
    completedTasksCount++;
    checkAllTasksCompleted();
}

// changing color of the buttons to show it's disabled for Task 6
function changeColor6() {
    let button = document.getElementById("btn-6");
    button.classList.remove("bg-accent", "text-white");
    button.classList.add("bg-gray-200", "text-gray-500");
}

// adding the message in activity log with dynamic time
function addCompletionMessage6() {
    let activityLog = document.getElementById("task-message");
    let taskName = document.getElementById("task6").textContent;

    // adding time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let currentTime = hours + ':' + minutes + ':' + seconds + ' ' + amPm;

    let messageDiv = document.createElement("div");
    messageDiv.className = "p-3 bg-secondary rounded-lg text-xs";
    messageDiv.textContent = `You have completed the task ${taskName} at ${currentTime}`;

    activityLog.appendChild(messageDiv);

    // Incrementing the completed task number   
    completedTasksCount++;
    checkAllTasksCompleted();
}

// clearing history
function clearActivityLog() {
    document.getElementById("task-message").innerHTML = "";
}