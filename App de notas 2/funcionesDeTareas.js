let fs = require("fs")//requiero el modulo fs para traer el JSON

module.exports = {
    archivo: "./tareas.json",
    leerJSON: () =>{
        let tareasjson = fs.readFileSync("./tareas.json", "utf-8")//traigo el JSON con el modulo fs
        return JSON.parse(tareasjson)
    }
}