//JSON.parse convierte un dato JSON al tipo de dato de JavaScript
//JSON.stringify convierte un dato JS a un texto formato JSON
let funcionesDeTareas = require("./funcionesDeTareas")
let process = require("process")

let instruccion = process.argv[2]

switch(instruccion){
    case "listar":
    console.log(funcionesDeTareas.leerJSON())
    break;
    case "undefined":
    console.log("tienes que pasar una acción")
    break
    default:
        console.log("No entiendo lo que queres hacer")
    break
}




