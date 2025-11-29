const taskInput = document.getElementById('taskInput');
const taskCreateBtn = document.getElementById('taskCreateBtn');
const contentArea = document.getElementById('contentArea');
let taskID = 1;
let savedTasks = JSON.parse(localStorage.getItem('toDoList')) || [];

savedTasks.forEach(element => {
    createDiv(element);
});

taskCreateBtn.addEventListener('click', () => {

    if (taskInput.value == "") {
        window.alert("Error, please input text");
    } else {
        createDiv(taskInput.value);
        savedTasks.push(taskInput.value);
        localStorage.setItem('toDoList', JSON.stringify(savedTasks));
    }
    taskID++;
    taskInput.value = ""; //clear input text area
    // console.log("taskInput.value");
    // console.log(taskID);

});

console.log(savedTasks);

function createDiv(text) {
    const date = new Date();
    let taskHTML =
    ` <div class="taskArea" id="task">
    <p class="taskContentNumber" id="task">#</p>
    <p class="taskContent" id="taskContent">${text}</p>
    <p class="currentDate" id="currentDate">${date.toLocaleString()}</p>
    <button class="editBtn" id="editBtn">Edit</button>
    <button class="closeBtn" id="closeBtn">Close</button>
  </div>`;
    contentArea.insertAdjacentHTML('beforeend', taskHTML);
}

//edit button and close button for each task
contentArea.addEventListener('click', function (event) {
    if (event.target.classList.contains('editBtn')) {
        // console.log(event.target.id);
        const taskArea = event.target.closest('.taskArea');
        const content = taskArea.querySelector('.taskContent');
        const newContent = prompt("Input new content: ", content.textContent);
        if (newContent !== null && newContent.trim() !== "") {
            content.textContent = newContent;
        }
    }
    if (event.target.classList.contains('closeBtn')) {
        // console.log(event.target.id);
        // event.target.closest('.taskArea').remove();
        const taskArea = event.target.closest('.taskArea');
        const content = taskArea.querySelector('.taskContent');
        const closeBtn = taskArea.querySelector('.closeBtn');
        if (closeBtn.textContent == "Close") {
            content.style.textDecoration = "line-through";
            closeBtn.textContent = "Open";
        } else {
            content.style.textDecoration = "none";
            closeBtn.textContent = "Close";
        }

    }
})