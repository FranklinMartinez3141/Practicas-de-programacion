"use strict";

// Formato de hora actual: Obtenga la hora, minutos y segundos actual. Muestre en formato: HH:MM:SS
var fecha = new Date();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();
console.log("La hora es: ".concat(hora, ":").concat(minutos, ":").concat(segundos));