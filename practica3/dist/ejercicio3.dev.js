"use strict";

var _nodeReadline = _interopRequireDefault(require("node:readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var entrada = _nodeReadline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

entrada.question("Ingrese el monto de compra: ", function (monto) {
  monto = parseFloat(monto);
  var descuento = 0;

  if (monto > 100) {
    descuento = 0.15;
  } else if (monto > 50) {
    descuento = 0.1;
  } else {
    descuento = 0;
  }

  var totalPagar = monto - descuento * monto;
  var mensajeDescuento = descuento > 0 ? (descuento * 100).toString() + "%" : "No hay descuento";
  console.log("Monto original: " + monto.toFixed(2));
  console.log("Descuento aplicado: " + mensajeDescuento);
  console.log("Total a pagar: " + totalPagar.toFixed(2));
  entrada.close();
});