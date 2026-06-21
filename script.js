const uploadBtn = document.getElementById("uploadBtn");

if(uploadBtn){
    uploadBtn.addEventListener("click", function() {
        alert("Upload feature coming soon!");
    });
}

const searchBar = document.getElementById("searchBar");
const noResults = document.getElementById("noResults");

if(noResults){
    noResults.style.display = "none";
}

if(searchBar){
    searchBar.addEventListener("input", function(){
        const query = searchBar.value.toLowerCase();
        const noteCards = document.querySelectorAll(".note-card");
        let visibleCount = 0;

        noteCards.forEach(function(card){
            const subject = card.querySelector("h3").textContent.toLowerCase();
            const desc = card.querySelectorAll("p")[0].textContent.toLowerCase();
            const matches = subject.includes(query) || desc.includes(query);

            if(matches){
                card.classList.remove("hidden");
                visibleCount++;
            } else {
                card.classList.add("hidden");
            }
        });

        if(noResults){
            noResults.style.display = visibleCount === 0 ? "block" : "none";
        }
    });
}
const themeSwitch =
    document.querySelector(".theme-switch");

const knob =
    document.querySelector(".switch-knob");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

    if(knob){
        knob.classList.add("active");
    }
}

if(themeSwitch){

    themeSwitch.addEventListener("click", function(){

        document.body.classList.toggle("light-mode");

        if(knob){
            knob.classList.toggle("active");
        }

        if(document.body.classList.contains("light-mode")){
            localStorage.setItem("theme", "light");
        }
        else{
            localStorage.setItem("theme", "dark");
        }

    });

}
let tasks = [];
try {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
} catch(e) {
    tasks = [];
}

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}

function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderTasks(){

    const taskList =
        document.getElementById("taskList");

    if(!taskList) return;

    const pendingTasks =
        tasks.filter(task => !task.completed);

    const completedTasks =
        tasks.filter(task => task.completed);

    let html = "";

    pendingTasks.forEach(task => {

        const originalIndex = tasks.indexOf(task);

        html += `
            <li class="task-item" data-index="${originalIndex}">
                <input type="checkbox" data-index="${originalIndex}">
                ${escapeHTML(task.text)}
            </li>
        `;

    });

    if(completedTasks.length > 0){

        html += `<li class="completed-heading"><h3>Completed Tasks</h3></li>`;

        completedTasks.forEach(task => {
            html += `
                <li class="completed-task">
                    ${escapeHTML(task.text)}
                </li>
            `;
        });

    }

    taskList.innerHTML = html;

}

function completeTask(index){

    tasks[index].completed = true;

    saveTasks();

    renderTasks();

}

const taskList = document.getElementById("taskList");

if(taskList){
    taskList.addEventListener("change", function(e){
        if(e.target.type === "checkbox"){
            const index = parseInt(e.target.dataset.index);
            completeTask(index);
        }
    });
}

const addTaskBtn =
    document.getElementById("addTaskBtn");

const taskInput =
    document.getElementById("taskInput");

if(addTaskBtn){

    addTaskBtn.addEventListener("click", function(){

        const taskText =
            taskInput.value.trim();

        if(taskText === "") return;

        tasks.push({
            text: taskText,
            completed: false
        });

        saveTasks();

        renderTasks();

        taskInput.value = "";

    });

}
const clearHistoryBtn =
    document.getElementById("clearHistoryBtn");

if(clearHistoryBtn){

    clearHistoryBtn.addEventListener("click", function(){

        tasks = tasks.filter(
            task => !task.completed
        );

        saveTasks();

        renderTasks();

    });

}
renderTasks();