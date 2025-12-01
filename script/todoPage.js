const taskInput = document.getElementById('taskInput');
const taskCreateBtn = document.getElementById('taskCreateBtn');
const contentArea = document.getElementById('contentArea');
let savedTasks = JSON.parse(localStorage.getItem('toDoList')) || [];
let taskID = savedTasks.length + 1;


savedTasks.forEach(element => {
    createDiv(element[0], element[1]);
    if (element[2] == "Open") { //task at close status
        document.getElementById(`${element[0]}`).textContent = `#${element[0]}`;
        document.getElementById(`taskContent${element[0]}`).style.textDecoration = "line-through";
        document.getElementById(`closeBtn${element[0]}`).textContent = "Open";
        document.getElementById(`currentDate${element[0]}`).textContent = element[3];
    } else { //task at open status
        document.getElementById(`${element[0]}`).textContent = `#${element[0]}`;
        document.getElementById(`taskContent${element[0]}`).style.textDecoration = "none";
        document.getElementById(`currentDate${element[0]}`).textContent = element[3];
    }
});

taskCreateBtn.addEventListener('click', () => {
    
    if (taskInput.value == "") {
        window.alert("Error, please input text");
    } else {
        let date = new Date();
        let microSecond = date.getTime();
        date = date.toLocaleString('en-US');
        let taskArray = [taskID, taskInput.value, "Close", date, microSecond];
        createDiv(taskID, taskInput.value, date);
        savedTasks.push(taskArray);
        localStorage.setItem('toDoList', JSON.stringify(savedTasks));
    }
    taskID++;
    taskInput.value = ""; //clear input text area
    // console.log("taskInput.value");
    // console.log(taskID);

});

console.log(savedTasks);

function createDiv(id, text, date) {
    // const date = new Date();
    let taskHTML =
    ` <div class="taskArea" id="task">
    <p class="taskContentNumber" id="${id}">#${id}</p>
    <p class="taskContent" id="taskContent${id}">${text}</p>
    <p class="currentDate" id="currentDate${id}">${date}</p>
    <button class="editBtn" id="editBtn">Edit</button>
    <button class="closeBtn" id="closeBtn${id}">Close</button>
  </div>`;
    contentArea.insertAdjacentHTML('beforeend', taskHTML);
}

//edit button and close button for each task
contentArea.addEventListener('click', function (event) {
    if (event.target.classList.contains('editBtn')) {
        const taskArea = event.target.closest('.taskArea');
        const content = taskArea.querySelector('.taskContent');
        const taskId = taskArea.querySelector('.taskContentNumber');
        const newContent = prompt("Input new content: ");
        if (newContent !== null && newContent.trim() !== "") {
            content.textContent = newContent;
            savedTasks[taskId.id - 1][1] = newContent;
            localStorage.setItem('toDoList', JSON.stringify(savedTasks));
        }
    }
    if (event.target.classList.contains('closeBtn')) {
        // console.log(event.target.id);
        // event.target.closest('.taskArea').remove();
        const taskArea = event.target.closest('.taskArea');
        const content = taskArea.querySelector('.taskContent');
        const taskId = taskArea.querySelector('.taskContentNumber');
        const closeBtn = taskArea.querySelector('.closeBtn');
        if (closeBtn.textContent == "Close") {
            content.style.textDecoration = "line-through";
            closeBtn.textContent = "Open";
            savedTasks[taskId.id - 1][2] = "Open";
            localStorage.setItem('toDoList', JSON.stringify(savedTasks));
            console.log(savedTasks);

        } else {
            content.style.textDecoration = "none";
            closeBtn.textContent = "Close";
            savedTasks[taskId.id - 1][2] = "Close";
            localStorage.setItem('toDoList', JSON.stringify(savedTasks));
            console.log(savedTasks);
        }
    }
})