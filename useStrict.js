/**
 *  use strict
 * Es una linea que indica que el codigo debe ser "en modo estricto", es decir
 * fuera de la funcion tiene ambito global;
 * dentro de ella , local(el de la funcion)
 * 
 * ejemplo: declarar variables antes de utilizarla
 */



persona2 = "charles";
//let nacimiento;
console.log(persona2);
function informacion() {
  //"use strict";
  let persona = "ada"
  nacimiento = "1815"
  console.log(persona + " nacio en :" + nacimiento);
}

informacion();