//findIndex -> devulve el indice del array
const L = [1, 5, NaN, 7];
let pos = L.findIndex(el => el > 5)
let posIndex = L.findIndex(el => el === 5)
let posIndexx = L.findIndex(el => Number.isNaN(el))
console.log(pos, posIndex, posIndex);


//find : devuelve el elemento
const valor = L.find(el => el === 1)
console.log(valor);


//fill : crear un array de un tamaño determinado e inicializa su contenido
const array2 = new Array(5).fill(5)
console.log(array2);
const array3 = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j").fill(null, 3, 5)
console.log(array3);


//copyWithin :copia los elementos teniendo un inicio y un fin
const array4 = ["a", "b", "c", "d", "e", "f", "g"]
console.log(array4)


//METODOS ESTATICOS
//Array.from() : permite convertir los elementos iterables y pseudoarrays


//EXPRESIONES REGULARES
