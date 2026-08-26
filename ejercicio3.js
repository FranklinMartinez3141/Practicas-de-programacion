// Declaramos la cantidad de kilowatts (kWh) consumidos durante el mes
let kWh = 250;

// Definimos el precio fijo por cada kilowatt (constante porque no cambia)
const kw = 0.15;

// Calculamos el costo base multiplicando los kilowatts consumidos por el precio unitario
let costoBase = kWh * kw;

// Calculamos el impuesto correspondiente al 10% del costo base
let impuesto = costoBase * 0.1;

// Calculamos el costo total sumando el costo base más el impuesto
let costoTotal = costoBase + impuesto;

// Mostramos en consola la cantidad de kilowatts consumidos
console.log("Consumo: " + kWh  + " kWh");

// Mostramos el costo base sin impuestos, redondeado a dos decimales
console.log("Costo sin impuesto: $" + costoBase.toFixed(2));

// Mostramos el monto del impuesto (10%), redondeado a dos decimales
console.log("Impuesto (10%): $" + impuesto.toFixed(2));

// Mostramos el costo total a pagar, redondeado a dos decimales
console.log("Costo total a pagar: $" + costoTotal.toFixed(2));