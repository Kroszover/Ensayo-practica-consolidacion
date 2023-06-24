const fs = require("fs");
const Empleados = require("../models/empleados.js");

const leerTodo = (nombreArchivo) => {
  // Vendria a ser el Read del Crud
  const arrayEmpleados = [];
  let datos = fs.readFileSync(`./data/${nombreArchivo}.csv`, "utf8");
  datos = datos.replace(/\r/g, " "); // Reemplaza los saltos de linea por espacios en blanco /\r/g es una expresion regular que busca todos los saltos de linea y los reemplaza por espacios en blanco " "
  datos = datos.replace(/\n/g, ";"); // Reemplaza los saltos de linea por ; /\n/g es una expresion regular que busca todos los saltos de linea y los reemplaza por ;
  datos = datos.split(";"); // Convierte el string en un array separado por ;

  datos.forEach((element, indice) => {
    if ((indice + 1) % 7 == 0) {
      // Si el indice + 1 es multiplo de 3, es decir, si el indice es 2, 5, 8, 11, etc
      const empleados = new Empleados( // Crea un nuevo empleados con los datos del array
        datos[indice - 6], // El nombre del empleados es el indice - 2, es decir, si el indice es 2, el nombre es 0
        datos[indice - 5], // El apellido del empleados es el indice - 1, es decir, si el indice es 2, el apellido es 1
        datos[indice - 4], // El email del empleados es el indice, es decir, si el indice es 2, el email es 2
        datos[indice - 3],
        datos[indice - 2],
        datos[indice - 1],
        datos[indice]
      );
      arrayEmpleados.push(empleados); // Agrega el empleados al array de clientes
    }
  });

  console.log(arrayEmpleados);
  return arrayEmpleados;
};

const leerPorId = (id, nombreArchivo) => {};

const insertar = (empleados) => {};

const actualizar = (empleados) => {};

const eliminar = (id) => {};

module.exports = { leerTodo };
