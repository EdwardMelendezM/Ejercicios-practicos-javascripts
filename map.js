let opMat = new Map([[49, "mazamorra"], [37, "salamdra"], [55, "zamora"]])
//map
console.log(opMat)

//Tamaño de map
console.log(opMat.size)

//Obtener un valor por clave
console.log(opMat.get(49))

//Dar un valor por clave
console.log(opMat.set(55, "onichan"))

//Verificar si existe un valor por clave
console.log(opMat.has(66))

//Elimiar un elemento
opMat.delete("ZAMOR")

//Borrar todos los elementos
opMat.clear();
console.log(opMat)

//Iteradores
//Key , values, entries:pare(key,value)
let iteradorClave = opMat.keys();
let iteradorValor = opMat.values();
let iteradorEntry = opMat.entries();

