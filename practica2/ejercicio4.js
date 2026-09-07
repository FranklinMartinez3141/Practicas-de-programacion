let fecha = new Date();

let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let anio = fecha.getFullYear();

let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

let fechaFormateada = dia.toString() + "/" + mes.toString() + "/" + anio.toString();
let horaFormateada = horas.toString() + ":" + minutos.toString() + ":" + segundos.toString();

console.log("Hoy es " + fechaFormateada + " y son las " + horaFormateada);