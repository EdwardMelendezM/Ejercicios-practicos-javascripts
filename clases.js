/**
 * CLASES
 * ----------------------------------------------------------------
 * Las clases son una mejora sintactica sobre la herencia basada en prototipos de js
 * Ofrecen una sintaxis mas simple para crear objetos
 * No utiliza la palabra functio, sino la palabra class
 * Las propiedades se asignan al metodo constructor(), no en la clase en si
 * 
 * 
 * HERENCIA
 * ----------------------------------------------------------------
 * Para crear herencia solo es necesario usar extends y listo
 */

class Telefono {
  constructor(marca, precio) {
    this.marca = marca;
    this.precio = precio;
  }
  anuncio() {
    return "Ha llegado el nuevo telefono" + this.marca
  }
}

class Modelo extends Telefono {
  constructor(marca, precio, modelo) {
    super(marca, precio)
    this.modelo = modelo;

  }
  anuncioCompleto() {
    return this.anuncio() + ": el modelo " + this.modelo + ": precio -> " + this.precio
  }
}
let nuevoModelo = new Modelo("MARCA1", "2011 soles", "MODEL1")
console.log(nuevoModelo.anuncioCompleto());



class Onichan {
  constructor(nombre, apellidos, tipo) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.tipo = tipo;
    this.mostarDato = function () {
      console.log(this.nombre, "---", this.apellidos, this.tipo);
    }
  }
}

//let onichan = new Onichan("JUAN,PIPI,ALIENIGENA");
//onichan.mostarDato();

