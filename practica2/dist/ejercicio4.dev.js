"use strict";

var fecha = new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth() + 1;
var anio = fecha.getFullYear();
var horas = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();
var fechaFormateada = dia.toString() + "/" + mes.toString() + "/" + anio.toString();
var horaFormateada = horas.toString() + ":" + minutos.toString() + ":" + segundos.toString();
console.log("Hoy es " + fechaFormateada + " y son las " + horaFormateada);