//Usamos reduce para iterar cada elemento y al final retorne solamente uno
const numbers = [1, 2, 3, 4, 5, 6]
//          acumulador, item, indice, array
const res = numbers.reduce((acc, item) => {
  return (acc + item)
}, 10)
//console.log(res);

const stringss = ["Mi", "nombre", "es", "Marco"]
const ress = stringss.reduce((acc, item) => {
  return acc = acc + " " + item
}, "Hola")
console.log(ress);


const objs = [
  {
    nombre: "Marcos", edad: 15
  },
  {
    nombre: "Lena", edad: 10
  }
]

const resss = objs.reduce((acc, item) => {
  return acc += item.edad
}, 0)

console.log(resss);



const numberss = [1, 50, 77, 10, 25, 36, 11]
const ressss = numberss.reduce((acc, item) => {
  return Math.max(acc, item)
}, 0)

const promedio = numberss.reduce((acc, item) => {
  return acc + item
}, 0)

console.log((promedio / numberss.length));  