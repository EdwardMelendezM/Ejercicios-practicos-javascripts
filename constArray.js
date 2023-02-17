/**
 * ARRAY CONSTANTES
 * ----------------------------------------------------
 * Al igual que otros tipos de datos, podemos declarar variables
 * constantes con const. No podemos redefinirlos utilizando el igual
 * como lo hariamos con una variable, pero si podemos cambiar sus 
 * valores uno a uno
 */


function cambiarArray() {
  "use strict";
  const ARRAY = [1, 2, 3]
  console.log(ARRAY);
  ARRAY[0] = 3
  ARRAY[1] = 2
  ARRAY[2] = 1
  console.log(ARRAY);
}

cambiarArray()