"use strict";

// Cálculo de edad: Solicite al usuario su año de nacimiento. Obtenga el año actual y calcule su edad.
var fecha = new Date();
var nacimiento = 2005;
var anio = fecha.getFullYear();
var edad = anio - nacimiento;
console.log("Su edad es: " + edad);