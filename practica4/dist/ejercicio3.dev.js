"use strict";

var _nodeReadline = _interopRequireDefault(require("node:readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Objeto para la entrada de datos
var entrada = _nodeReadline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
}); //Solicita al usuario el tipo de bebida


entrada.question("Ingrese una opcion: \n1=Agua\n2=Refresco\n3=Jugo\n4=Café\n5=Té\n", function (opcion) {
  //Parsea la variable opcion a entero
  opcion = parseInt(opcion);

  switch (opcion) {
    case 1:
      console.log("Ha seleccionado: Agua");
      break;

    case 2:
      console.log("Ha seleccionado: Refresco\n¿Desea agregar hielo? ");
      break;

    case 3:
      console.log("Ha seleccionado: Jugo\n¿Desea agregar hielo?");
      break;

    case 4:
      console.log("Ha seleccionado: Cafe");
      break;

    case 5:
      console.log("Ha seleccionado: Te");
      break;

    default:
      //Impresion en caso de no ser ninguna opcion disponible
      console.log("Bebida no disponible");
  } //Cierre del objeto entrada


  entrada.close();
});