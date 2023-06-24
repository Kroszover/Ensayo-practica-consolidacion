const fs = require("fs");
const Ordenes = require("../models/ordenes.js");

const leerTodo = (nombreArchivo) => {
  // Vendria a ser el Read del Crud
  const arrayOrdenes = [];
  let datos = fs.readFileSync(`./data/${nombreArchivo}.csv`, "utf8");
  datos = datos.replace(/\r/g, " "); // Reemplaza los saltos de linea por espacios en blanco /\r/g es una expresion regular que busca todos los saltos de linea y los reemplaza por espacios en blanco " "
  datos = datos.replace(/\n/g, ";"); // Reemplaza los saltos de linea por ; /\n/g es una expresion regular que busca todos los saltos de linea y los reemplaza por ;
  datos = datos.split(";"); // Convierte el string en un array separado por ;

  datos.forEach((element, indice) => {
    if ((indice + 1) % 7 == 0) {
      // Si el indice + 1 es multiplo de 3, es decir, si el indice es 2, 5, 8, 11, etc
      const ordenes = new Ordenes( // Crea un nuevo ordenes con los datos del array
        datos[indice - 6], // El nombre del ordenes es el indice - 2, es decir, si el indice es 2, el nombre es 0
        datos[indice - 5], // El apellido del ordenes es el indice - 1, es decir, si el indice es 2, el apellido es 1
        datos[indice - 4], // El email del ordenes es el indice, es decir, si el indice es 2, el email es 2
        datos[indice - 3],
        datos[indice - 2],
        datos[indice - 1],
        datos[indice]
      );
      arrayOrdenes.push(ordenes); // Agrega el ordenes al array de clientes
    }
  });

  console.log(arrayOrdenes);
  return arrayOrdenes;
};

const leerPorId = (id, nombreArchivo) => {};

const insertar = (ordenes) => {};

const actualizar = (ordenes) => {};

const eliminar = (id) => {};

module.exports = { leerTodo };
