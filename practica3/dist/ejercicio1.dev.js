"use strict";

var _nodeReadline = _interopRequireDefault(require("node:readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var entrada = _nodeReadline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

entrada.question("Ingrese un numero: ", function (num) {
  num = parseFloat(num);

  if (num > 0) {
    console.log("El numero es positivo.");
  } else if (num < 0) {
    console.log("El numero es negativo.");
  } else {
    console.log("El numero es 0");
  }

  entrada.close();
});