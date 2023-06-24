const fs = require("fs");
const DetalleDeOrden = require("../models/detalleDeOrdenes.js");

const leerTodo = (nombreArchivo) => {
  // Vendria a ser el Read del Crud
  const arrayDetDeOrdenes = [];
  let datos = fs.readFileSync(`./data/${nombreArchivo}.csv`, "utf8");
  datos = datos.replace(/\r/g, " "); // Reemplaza los saltos de linea por espacios en blanco /\r/g es una expresion regular que busca todos los saltos de linea y los reemplaza por espacios en blanco " "
  datos = datos.replace(/\n/g, ";"); // Reemplaza los saltos de linea por ; /\n/g es una expresion regular que busca todos los saltos de linea y los reemplaza por ;
  datos = datos.split(";"); // Convierte el string en un array separado por ;

  datos.forEach((element, indice) => {
    if ((indice + 1) % 5 == 0) {
      // Si el indice + 1 es multiplo de 3, es decir, si el indice es 2, 5, 8, 11, etc
      const detalleDeOrden = new DetalleDeOrden( // Crea un nuevo detalleDeOrden con los datos del array
        datos[indice - 4], // El email del detalleDeOrden es el indice, es decir, si el indice es 2, el email es 2
        datos[indice - 3],
        datos[indice - 2],
        datos[indice - 1],
        datos[indice]
      );
      arrayDetDeOrdenes.push(detalleDeOrden); // Agrega el detalleDeOrden al array de clientes
    }
  });

  console.log(arrayDetDeOrdenes);
  return arrayDetDeOrdenes;
};

const leerPorId = (id, nombreArchivo) => {};

const insertar = (detalleDeOrden) => {};

const actualizar = (detalleDeOrden) => {};

const eliminar = (id) => {};

module.exports = { leerTodo };
