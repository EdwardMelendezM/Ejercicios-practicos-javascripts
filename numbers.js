//Number.isInteger(numero)
console.log(Number.isInteger(1.5));

//Number.isNan(numero)
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));

//Verificar el toque de max numero seguro
console.log("El mayor numero seguro es:" + Number.MAX_SAFE_INTEGER)
console.log("El mayor numero seguro es:" + Number.MIN_SAFE_INTEGER)

//Number.parseInt(Number) convierte un numero a entero
//Number.parseFloat(Number) convierte a un numero float
//Number.isFinite(Number) verifica si es finito el numero


// USO DE MATH
//Math.trunc() -> Devuelve la parte entera de un numero
console.log(Math.trunc(10.9));

//Math.sign() -> Devuelve la parte del signo de un numer
// 1(positivo) ,-1(negativo) , 0(cero positivo), -0(cero negativo), NaN(valor NaN)
