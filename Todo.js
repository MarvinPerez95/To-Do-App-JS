import GestionTarea from "./Tarea.js";

const task = new GestionTarea();
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

window.addTask = function addTask(){
    if(inputBox.value === ''){
        alert("Ingresa Datos a la lista!!")
    }else{
        let li = document.createElement("li");
        //task.agregarTarea = li.innerHTML;
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
};

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();