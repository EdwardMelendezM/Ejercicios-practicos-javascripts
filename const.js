/**
 *  CONST .- Declarar constante
 * ------------------------
 * Las variables constantes en js tienen ambito de bloque
 * al igual que las variables definidas utilizando let.
 * 
 * Es importante tener en cuenta que el valor no puede variar (Reasignar)
 * por lo tanto, se asignan al momento de declarar
 *  
 */

function saludar() {
  "use strict"
  const SALUDO = "hola caracola"
  //SALUDO = "hola onichan"
  console.log(SALUDO);

}

saludar()