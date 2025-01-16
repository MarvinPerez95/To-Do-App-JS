import Tarea from "./App.js";
class GestionTarea{
    constructor (){
        this.tareas = [];
    }

    agregarTarea(taskData){
        //taskData.id +=1;
        this.tareas.push(taskData);
    }

    listarTareas(){
        return this.tareas;
    }

    RecargarTareas(tareas){
        this.tareas = tareas
    }

    eliminarTarea(id){
        this.tareas = this.tareas.filter(tarea=>tarea.id !==parseInt(id));
    }

    completarTarea(id){
        const tarea = this.tareas.find(tarea => tarea.id ===parseInt(id));
        if(tarea) {
            tarea.completed = !tarea.completed;
        } 
    }

}
export default GestionTarea;


 /*    agregarTarea(descripcion){
        const id = this.tareas.length + 1;
        const nuevaTarea = new Tarea(id, descripcion);
        this.tareas.push(nuevaTarea);
        //return nuevaTarea;
} 
        completarTarea(id){
        const tarea = this.tareas.find(tarea => tarea.id ===parseInt(id));
        if(tarea) tarea.completarTarea(); 
    }
}

*/