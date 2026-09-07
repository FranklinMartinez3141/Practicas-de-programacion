"use strict";

var _nodeReadline = _interopRequireDefault(require("node:readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var entrada = _nodeReadline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

entrada.question("Ingrese su año de nacimiento: ", function (año) {
  var fecha = new Date();
  var añoActual = fecha.getFullYear();
  var edad = añoActual - año;
  console.log("Tu edad aproximada es: " + edad) + " años.";
  entrada.close();
});