const fs = require("fs");
const Cliente = require("../models/clientes");

const leerTodo = (nombreArchivo) => {
  const arrayClientes = [];
  let datos = fs.readFileSync(`./data/${nombreArchivo}.csv`, "utf8");
  datos = datos.replace(/\r/g, " "); // Reemplaza los saltos de linea por espacios en blanco /\r/g es una expresion regular que busca todos los saltos de linea y los reemplaza por espacios en blanco " "
  datos = datos.replace(/\n/g, ";"); // Reemplaza los saltos de linea por ; /\n/g es una expresion regular que busca todos los saltos de linea y los reemplaza por ;
  datos = datos.split(";"); // Convierte el string en un array separado por ;

  datos.forEach((element, indice) => {
    if ((indice + 1) % 3 == 0) {
      const cliente = new Cliente(
        datos[indice - 2],
        datos[indice - 1],
        datos[indice]
      );
      arrayClientes.push(cliente);
    }
  });

  console.log(arrayClientes);
  return arrayClientes;
};

leerTodo("customers");
