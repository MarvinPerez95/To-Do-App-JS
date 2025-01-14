import Tarea from "./App.js";
class GestionTarea{
    constructor (){
        this.tareas = []
    }

    agregarTarea(descripcion){
        const id = this.tareas.length + 1;
        const nuevaTarea = new Tarea(id, descripcion);
        this.tareas.push(nuevaTarea);
        return nuevaTarea;
    }

    listarTareas(){
        return this.tareas;
    }

    eliminarTarea(id){
        this.tareas = this.tareas.filter(tarea=>tarea.id !==id);
    }

    completarTarea(id){
        const tarea = this.tareas.find(tarea => tarea.id ===id);
        if(tarea) tarea.completarTarea(); 
    }
}
export default GestionTarea;