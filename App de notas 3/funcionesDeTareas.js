const { info } = require("console");
let fs = require("fs")//requiero el modulo fs para traer el JSON


//Se pueden crear objetos que sean funciones!
module.exports = moduloTareas = {//exporto la función
    archivo: "./tareas.json",//propiedad que guarda el nombre del archivo
    leerJSON: () => {//metodo que retorna el JSON parseado
        let tareasJSON = fs.readFileSync("./tareas.json", "utf-8");//traigo el JSON con el modulo fs
        return JSON.parse(tareasJSON)
    },
    escribirJSON: (info) => {//paso "info" como parametro para luego poner entre parentesis lo que quiera convertir a formato JSON
        let nuevoJSON = JSON.stringify(info);//Stringify transforma de dato JS a dato JSON
        fs.writeFileSync("./tareas.json", nuevoJSON, "utf-8")//writeFileSync sirve para escribir un archivo
    },
    agregarTarea: (titulo, estado) => {
        let tareasAnteriores = moduloTareas.leerJSON();//traigo al array original


        let nuevaTarea = {//nuevo objeto para agregar al array original
            titulo: titulo,
            estado: estado
        }

        tareasAnteriores.push(nuevaTarea)//agrego al final de array un nuevo objeto

        moduloTareas.escribirJSON(tareasAnteriores)
    },
    filtrarPorEstado: () => {
        let lista = moduloTareas.leerJSON();
        let busqueda = process.argv[3]
        let especifico = process.argv[4]

        switch (busqueda) {
            case "tarea":
                     for (let i = 0; i < lista.length; i++) {
                     if (lista[i].titulo === lista[especifico].titulo) {
                         return console.log("el estado de esa tarea es:" + " "+ lista[i].estado)
                     }
                } 
                break;
            case "estado":
                    let estadosFiltrados = lista.filter(function(tareas){
                        if (tareas.estado == especifico) {
                            return tareas.titulo 
                        }
                    })
                    console.log("------------------------------")
                    console.log("Las tareas con ese estado son:")
                    console.log(estadosFiltrados)
                    console.log("------------------------------")
               break;
        }
        
    }
}

