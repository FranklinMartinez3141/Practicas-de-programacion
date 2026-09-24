"use strict";

var _nodeReadline = _interopRequireDefault(require("node:readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var entrada = _nodeReadline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Ingrese tres numero:");
entrada.question("Ingrese un numero: ", function (a) {
  entrada.question("Ingrese un numero: ", function (b) {
    entrada.question("Ingrese un numero: ", function (c) {
      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);
      var mayor = a;

      if (a == b && b == c) {
        console.log("Los tres numeros son iguales.");
      } else if (a != b && b != c) {
        console.log("Los tres numeros son diferentes.");
      } else if (a == b || b == c || a == c) {
        console.log("Hay dos numeros iguales");
      }

      if (mayor < b) {
        mayor = b;
      }

      if (mayor < c) {
        mayor = c;
      }

      if (a < 0 || b < 0 || c < 0) {
        console.log("Hay numeros negativos");
      }

      console.log("Numero mayor: " + mayor);
      entrada.close();
    });
  });
});