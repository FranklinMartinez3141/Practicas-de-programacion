"use strict";

// Extracción de datos: Solicite un código con formato "EST20260645". 
// Extraiga los primeros 3 caracteres y los últimos 4.
var codigo = 'EST20260645';
var codigo3Caracteres = codigo.slice(0, 3);
var codigo4Caracteres = codigo.slice(7, 11);
console.log("Los primeros 3 caracteres del codigo son: " + codigo3Caracteres);
console.log("Los ultimos 4 caracteres del codigo son: " + codigo4Caracteres);