"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Conversión número a texto: Solicite un número de referencia de 8 dígitos. Conviértalo 
// a texto y extraiga los primeros 4 dígitos.
var numero = 12345678;
var numeroTexto = numero.toString();
console.log('Su variable es de tipo: ' + _typeof(numeroTexto));
console.log("Los primeros 4 digitos son: " + numeroTexto.slice(0, 4));