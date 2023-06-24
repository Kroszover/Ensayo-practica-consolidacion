const fs = require("fs");
const Producto = require("../models/productos.js");

const leerTodo = (nombreArchivo) => {
  // Vendria a ser el Read del Crud
  const arrayProductos = [];
  let datos = fs.readFileSync(`./data/${nombreArchivo}.csv`, "utf8");
  datos = datos.replace(/\r/g, " "); // Reemplaza los saltos de linea por espacios en blanco /\r/g es una expresion regular que busca todos los saltos de linea y los reemplaza por espacios en blanco " "
  datos = datos.replace(/\n/g, ";"); // Reemplaza los saltos de linea por ; /\n/g es una expresion regular que busca todos los saltos de linea y los reemplaza por ;
  datos = datos.split(";"); // Convierte el string en un array separado por ;

  datos.forEach((element, indice) => {
    if ((indice + 1) % 5 == 0) {
      // Si el indice + 1 es multiplo de 3, es decir, si el indice es 2, 5, 8, 11, etc
      const productos = new Producto( // Crea un nuevo productos con los datos del array
        datos[indice - 4], // El nombre del productos es el indice - 2, es decir, si el indice es 2, el nombre es 0
        datos[indice - 3], // El apellido del productos es el indice - 1, es decir, si el indice es 2, el apellido es 1
        datos[indice - 2], // El nombre del productos es el indice - 2, es decir, si el indice es 2, el nombre es 0
        datos[indice - 1], // El apellido del productos es el indice - 1, es decir, si el indice es 2, el apellido es 1
        datos[indice] // El email del productos es el indice, es decir, si el indice es 2, el email es 2
      );
      arrayProductos.push(productos); // Agrega el productos al array de clientes
    }
  });

  console.log(arrayProductos);
  return arrayProductos;
};

const leerPorId = (id, nombreArchivo) => {};

const insertar = (productos) => {};

const actualizar = (productos) => {};

const eliminar = (id) => {};

module.exports = { leerTodo };
