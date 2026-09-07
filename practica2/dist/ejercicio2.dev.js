"use strict";

var _nodeReadline = _interopRequireDefault(require("node:readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var entrada = _nodeReadline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

entrada.question("Ingrese el nombre del producto: ", function (name) {
  entrada.question("Ingrese su precio unitario: ", function (precio) {
    entrada.question("Ingrese la cantidad de producto: ", function (cantidad) {
      precio = parseFloat(precio);
      cantidad = parseInt(cantidad);
      name = name.toUpperCase();
      var letras = name.slice(0, 3);
      var precioTotal = precio * cantidad;
      console.log("Nombre: " + name);
      console.log("Primeras 3 letras: " + letras);
      console.log("Precio total: " + precioTotal.toFixed(2));
      entrada.close();
    });
  });
});