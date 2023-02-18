const provincias = new Set(["san jeronimo", "san sebastian", "cusco", "cusco"])
console.log(provincias);

console.log("Tamaño del set : ", provincias.size);

//Metodos
//Comprobar si existe un elemento
console.log(provincias.has("san jeronimo"));

//Añadir elementos
console.log(provincias.add("parala"));
console.log(provincias.add("ameno"));


//Eliminar un elemento
console.log(provincias.delete("san jeronimo"));

console.log(provincias);

//Eliminar todos los elementos
provincias.clear();
console.log(provincias);

