Acabo de terminar mis primeros buscadores y estoy muy muy emocionado, despues de estar 3 días intentado, hoy me
levanté y lo terminé en 30 minutos! increible, bueno este app de notas me sirvió para terminar de entender la
funcionalidad del ciclo for y el filter, aprender a manejar datos provenientes de un JSON y transformarlos en array
para así poder manipularlo a traves de JavaScript tambien aprendí la concatenación a traves de ` ` y $ que sirve
para concatenar contenido JavaScript y Strings sin tener que andar usando los "+", tambien aprendí a agregar
contenido a un JSON a traves del metodo push para agregarlo a un array y luego usando el stringify para transformarlo
a formato JSON.
 
Para poder usar este app de notas:

Si queremos ver el total de las tareas en la posicion 2 debemos poner "listar"
EJEMPLO:
node app.js listar


Si queremos ver el estado de una tarea en especifico en la posición 2 debemos poner "buscar" luego "tarea" y luego
el numero de la tarea ejemplo:
node app.js buscar tarea 4

y si queremos ver las tareas con un estado en especifico solo debemos poner "buscar" en la posición 2 luego "estado"
y luego elegir un estado entre: "En progreso", "pendiente", "terminada".

EJEMPLO: node app.js buscar estado pendiente

Si queremos agregar contenido a nuestro app de notas debemos en la posición 2 poner la palabra agregar en la posición
3 el nombre de la tarea y en la posición 4 el estado de la tarea

EJEMPLO:node app.js agregar "App de notas" TERMINADO 