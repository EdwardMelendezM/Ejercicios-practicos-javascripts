//La promesa
//Es una forma de administrar operacione asincronas
let x = 10;

const p = new Promise((resolve, reject) => {
  if (x == 10) {
    resolve("La variable es igual a 10");
  } else {
    reject("La variable no es igual a 10");
  }
})

// p
//   .then(res => {
//     console.log("success " + res)
//   })
//   .catch(error => {
//     console.log("error " + error);
//   })

// console.log("1.Proceso iniciado");
// setTimeout(() => {
//   x = x * 3 + 2
//   console.log("2.Proceso terminado");
// }, 2000);
// console.log("3.El resultado es , x =", x);

// const promesa = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     x = x * 3 + 2
//     console.log("2.Proceso terminado");
//     resolve(x);
//   }, 2000);

// })
// console.log("1.Proceso iniciado");
// promesa.then(res => {
//   console.log("3. El resultado es : x=", res);
// })

const getUser = (numero) => new Promise((resolve, reject) => {
  setTimeout(() => {
    numero = numero * 100
    resolve(numero)
  }, 3000);

})

console.log("INCIA LA OPERACION");
getUser(10).then(res => console.log("La respuesta es :" + res))