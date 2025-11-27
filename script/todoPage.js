const taskInput = document.getElementById('taskInput');
const taskCreateBtn = document.getElementById('taskCreateBtn');
const contentArea = document.getElementById('contentArea');
let taskID = 1;

taskCreateBtn.addEventListener('click', () => {

    if (taskInput.value == "") {
        window.alert("Error, please input text");
    } else {
        createDiv(taskID, taskInput.value);
    }
    taskID++;
    taskInput.value = "";
    // console.log("taskInput.value");
    // console.log(taskID);

});

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

function createDiv(number, text) {
    const date = new Date();
    let taskHTML =
    ` <div class="taskArea" id="task">
    <p class="taskContentNumber" id="task${number}">#${number}</p>
    <p class="taskContent" id="taskContent${number}">${text}</p>
    <p class="currentDate" id="currentDate">${date.toLocaleString()}</p>
    <button class="editBtn" id="editBtn${number}">Edit</button>
    <button class="closeBtn" id="closeBtn${number}">Close</button>
  </div>`;
    contentArea.insertAdjacentHTML('beforeend', taskHTML);
}