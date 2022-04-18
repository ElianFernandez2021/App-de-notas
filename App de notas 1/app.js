let fs = require("fs")//Requiero el modulo fs
let tareas = fs.readFileSync("./tareas.json")//Traigo los archivos en formato JSON a traves del modulo fs
let datosParseados = JSON.parse(tareas)//El parse traduce los datos JSON a datos legibles para JS
                                       //En cambio el stringify traduce los datos de Js a JSON

console.log(datosParseados);