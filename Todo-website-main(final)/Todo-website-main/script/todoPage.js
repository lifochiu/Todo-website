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
});

//---Image uploader for tasks (added to Chu's code as well)---

//shows available images
function showImgs() {
    document.getElementById('imgCntr').style.display = "block";
    document.getElementById('CloseImgBtn').style.display = "block";
}
//hides available images
function hideImgs() {
    document.getElementById('imgCntr').style.display = "none";
    document.getElementById('CloseImgBtn').style.display = "none";
}
//creates task with selected image
const imgInput1 = document.getElementById('img1');
const imgInput2 = document.getElementById('img2');

imgInput1.addEventListener('click', () => {

    if (imgInput1) {
        createDivImg1(imgInput1.value);
        savedTasks.push(imgInput1.value);
        localStorage.setItem('toDoList', JSON.stringify(savedTasks));
    } 
});

imgInput2.addEventListener('click', () => {
    if (imgInput2) {
        createDivImg2(imgInput2.value);
        savedTasks.push(imgInput2.value);
        localStorage.setItem('toDoList', JSON.stringify(savedTasks));
    } 
});

function createDivImg1(text) {
    
    const date = new Date();
    let taskHTML =
    ` <div class="taskArea" id="task">
    <p class="taskContentNumber" id="task">#</p>
    <p class="taskContent" id="taskContent"><img src=./images/img1.png></p>
    <p class="currentDate" id="currentDate">${date.toLocaleString()}</p>
    <button class="editBtn" id="editBtn">Edit</button>
    <button class="closeBtn" id="closeBtn">Close</button>
  </div>`;
    contentArea.insertAdjacentHTML('beforeend', taskHTML);
};

function createDivImg2(text) {
    
    const date = new Date();
    let taskHTML =
    ` <div class="taskArea" id="task">
    <p class="taskContentNumber" id="task">#</p>
    <p class="taskContent" id="taskContent"><img src=./images/img2.png></p>
    <p class="currentDate" id="currentDate">${date.toLocaleString()}</p>
    <button class="editBtn" id="editBtn">Edit</button>
    <button class="closeBtn" id="closeBtn">Close</button>
  </div>`;
    contentArea.insertAdjacentHTML('beforeend', taskHTML);
};


/*
const image = document.createElement("img");
image.src = URL.createObjectURL(file);
image.alt = image.title = file.name;
listItem.appendChild(image);
listItem.appendChild(para);
*/