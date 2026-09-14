"use strict";

var _nodeReadline = _interopRequireDefault(require("node:readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Leer datos desde la consola
var entrada = _nodeReadline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
}); // Solicitar al usuario el número de lados de la figura


entrada.question("Ingresa el numero de lados de una figura (3,4,5,6): ", function (lados) {
  // Convertir la entrada de texto a un número entero
  lados = parseInt(lados); // Evaluar el número de lados usando la estructura Switch

  switch (lados) {
    case 3:
      console.log("Tu figura es un Triangulo");
      break;

    case 4:
      console.log("Tu figura es un Cuadrilatero");
      break;

    case 5:
      console.log("Tu figura es un Pentagono");
      break;

    case 6:
      console.log("Tu figura es un Hexagono");
      break;

    default:
      // Mensaje en caso de que el valor no esté en los casos anteriores
      console.log("Figura no reconocida.");
  } // Cerrar la interfaz de lectura


  entrada.close();
});