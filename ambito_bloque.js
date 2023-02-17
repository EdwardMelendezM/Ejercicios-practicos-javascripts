/**
 *  AMBITO DE VARIABLES
 * --------------------------------
 * El ambio de variables (scope) es la zona del programa en 
 * la que se define.
 * Javascript define dos ambitos para las variables:
 *  LOCAL Y GLOBAL
 * ----------------------------------------------------------------
 * Mediante var podemos definir como ambito local el ambio de una funcion
 * Con el por el contrario podemos diferenciar tambien el ambito de bloque
 */

function ambito() {
  let a = "ambito"
  if (true) {
    let a = "onichan"
    console.log(a);
  }
  console.log(a);
}
ambito()