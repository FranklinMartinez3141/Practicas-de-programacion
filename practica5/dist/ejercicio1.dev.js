"use strict";

var _nodeReadline = _interopRequireDefault(require("node:readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var entrada = _nodeReadline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Opciones de tarjetas de credito: ");
console.log("1=Débito\n2=Crédito\n3=Premium");
entrada.question("Ingrese su tipo de tarjeta: ", function (opcion) {
  entrada.question("Ingrese el monto a retirar multiplo de 10: ", function (monto) {
    opcion = parseInt(opcion);
    monto = parseFloat(monto);

    switch (opcion) {
      case 1:
        if (monto <= 500 && monto % 10 == 0) {
          console.log("Retiro exitoso");
        } else if (monto > 500) {
          console.log("Monto excedido");
        } else if (monto % 10 != 0) {
          console.log("El monto deberia ser multiplo de 10");
        }

        break;

      case 2:
        if (monto <= 1000 && monto % 10 == 0) {
          console.log("Retiro exitoso");
        } else if (monto > 1000) {
          console.log("Monto excedido");
        } else if (monto % 10 != 0) {
          console.log("El monto deberia ser multiplo de 10");
        }

        break;

      case 3:
        if (monto <= 2000 && monto % 10 == 0) {
          console.log("Retiro exitoso");
        } else if (monto > 2000) {
          console.log("Monto excedido");
        } else if (monto % 10 != 0) {
          console.log("El monto deberia ser multiplo de 10");
        }

        break;

      default:
        console.log("Tarjeta no valida.");
    }

    entrada.close();
  });
});