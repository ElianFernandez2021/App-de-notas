//JSON.parse convierte un dato JSON al tipo de dato de JavaScript
//JSON.stringify convierte un dato JS a un texto formato JSON
let funcionesDeTareas = require("./funcionesDeTareas")
let process = require("process")
let instruccion = process.argv[2]//atrapo lo que el usuario escriba en la posición 2
let tareas = funcionesDeTareas.leerJSON();//hay que recordar siempre poner los parentesis al terminar 

switch(instruccion){
    case "listar"://en caso de que el usuario ponga listar
            if(tareas.length === 0){//si el array de tareas está vacío se muestra"la lista de tareas está vacía"
            console.log("la lista de tareas está vacía")}else{//en caso contrario se muestra en contenido
                console.log("------------------")
                console.log("Listado de tareas")
                console.log("------------------")
                for (let i = 0; i < tareas.length; i++) {
                    console.log(`Titulo: ${tareas[i].titulo} Estado: ${tareas[i].estado}`) 
                }
                console.log("------------------")
                console.log("Listado de tareas")
                console.log("------------------")
            }
    break;
    case "agregar":
        let titulo = process.argv[3]
        let estado = process.argv[4]
        funcionesDeTareas.agregarTarea(titulo, estado)
        break
    case "buscar":
        funcionesDeTareas.filtrarPorEstado()
        break
    case "undefined":
    console.log("tienes que pasar una acción")
    break
    default:
        console.log("No entiendo lo que queres hacer")
    break
}




