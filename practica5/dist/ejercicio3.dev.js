"use strict";

var _nodeReadline = _interopRequireDefault(require("node:readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var entrada = _nodeReadline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

var saldo = 1000;
console.log("Cajero");
console.log("1. Consultar saldo\n2. Retirar dinero\n3. Depositar dinero\n4. Salir");
entrada.question("Elige una opcion: ", function (opcion) {
  opcion = parseInt(opcion);

  switch (opcion) {
    case 1:
      console.log("Saldo actual: " + saldo);
      break;

    case 2:
      entrada.question("Ingrese el monto a retirar: ", function (monto) {
        if (monto < saldo) {
          saldo = saldo - monto;
          console.log("Saldo actual: " + saldo);
        } else {
          console.log("No tiene saldo suficiente.");
        }
      });
      break;

    case 3:
      entrada.question("Ingrese la cantidad a depositar: ", function (depo) {
        depo = parseFloat(depo);

        if (depo < 0 || depo > 5000) {
          console.log("ERROR,Cantidad invalida");
        } else {
          saldo += depo;
          console.log("Saldo actual: " + saldo);
        }
      });
      break;

    case 4:
      console.log("Gracias por el usar el cajero");
      break;

    default:
      console.log("Opcion invalida");
  }
});