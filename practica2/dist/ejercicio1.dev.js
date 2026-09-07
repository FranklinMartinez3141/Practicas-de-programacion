"use strict";

var _nodeReadline = _interopRequireDefault(require("node:readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var entrada = _nodeReadline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

entrada.question("Ingrese su nombre completo: ", function (name) {
  name = name.toUpperCase();
  var newName = name.slice(0, 4);
  var minus = name.toLowerCase();
  console.log("Resultados");
  console.log("Nombre en mayuscula: " + name);
  console.log("Primeras 4 letras: " + newName);
  console.log("Minusculas: " + minus);
  entrada.close();
});