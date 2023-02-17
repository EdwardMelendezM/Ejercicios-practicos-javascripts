/**
 * RES
 * --------------------------------
 * La sintaxis de los parametros rest nos permite representar un
 * numero indefinido de argumentos como un array
 * 
 * Sintaxix
 * function (a,b,...theArgs){
 * }
 */

function onichan(a, b, ...args) {
  console.log("REST");
  console.log("a:", a);
  console.log("b:", b);
  console.log("c?:", args);
}
onichan("juan", "juan2", "juan3", "juan4", "juan8")