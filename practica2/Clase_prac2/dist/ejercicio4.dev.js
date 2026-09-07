"use strict";

// Fecha actual: Obtenga la fecha actual y muestre el día, mes y año de forma personalizada (Ej: 26/8/2026)
var fecha = new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth() + 1;
var anio = fecha.getFullYear();
console.log("La fecha actual es: ".concat(dia, "/").concat(mes, "/").concat(anio));