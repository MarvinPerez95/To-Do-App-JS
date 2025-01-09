class Tarea{
    constructor (id, descripcion, completada=false){
        this.id = id;
        this.descripcion = descripcion;
        this.completada = completada;
    }

    CompletarTarea(){
        this.completada = true;
    }
}