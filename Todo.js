import GestionTarea from "./Tarea.js";

const task = new GestionTarea();
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value.trim() === ''){
        alert("Ingresa Datos a la lista!!");
        return;
    }

    const taskData = {
        id: Date.now(),
        text: inputBox.value.trim(),
        completed: false,
    };

    task.agregarTarea(taskData);
    renderTask(taskData);
    inputBox.value = '';
    saveData();
}

function renderTask(taskData){
    let li = document.createElement("li");
    li.setAttribute("id",taskData.id);
    li.innerHTML = taskData.text;
    if (taskData.completed){
        li.classList.add("checked");
    }

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
    listContainer.appendChild(li);
}   

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        const taskID = e.target.id
        task.completarTarea(taskID);
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        const taskID = e.target.parentElement.id;
        task.eliminarTarea(taskID);
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    const tasks = task.listarTareas();
    localStorage.setItem("data", JSON.stringify(tasks));
};

function showTask(){
    const data = JSON.parse(localStorage.getItem('data'));
    listContainer.innerHTML = '';
    
    if (data) {
        data.forEach(taskData => {
            renderTask(taskData);
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showTask();
});

//invocacion de AddTaks
document.getElementById("AddToList").addEventListener("click", function(){
    addTask()
});