console.log("Hola mundo");
let num = 0;
const array = [1, 2, 3, 4, 5, 6]
let aux = 0;
const arrayNew = array.map(num => {
  aux += num
  return aux
})

console.log(array);
console.log(arrayNew);