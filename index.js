let http = require("http")
let fs = require ("fs")

http.createServer(function (peticion, respuesta){
	let archivo = peticion.url // acá se guarda el archivo /index.html
	//archivo=archivo.substr(1)
	fs.readFile("public" + archivo, function(error, file){
		if (error){
			respuesta.end("404- archivo no encontrado :( ")
		}else{
			respuesta.end (file)
				}
	})	
}).listen(80)