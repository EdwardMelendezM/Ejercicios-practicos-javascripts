//Metodo nuevos en ES6

const cadena = "¡¡Hola caracola!!";

//Verificar si la cadena empieza con un caracter
console.log(cadena.startsWith("¡¡Hol"));
console.log(cadena.startsWith("car", 7));

//Verificar si la cadena terminar con un caracter
//endsWith("")

//includes(cadena_texto) : retorna un true si la cadena esta
console.log(cadena.includes("caracola!"));

//repeat (numero) devuelve una cadena repetida
console.log(cadena.repeat(5));