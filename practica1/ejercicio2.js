// Declaramos la cantidad inicial de dinero en dólares (USD)
let dolares = 200;

// Convertimos los dólares a Euros (EUR) multiplicando por la tasa de 0.92
let euros = dolares * 0.92;

// Convertimos los dólares a Pesos Salvadoreños (SVC) multiplicando por 8.75
let pesosSalva = dolares * 8.75;

// Convertimos los dólares a Quetzales Guatemaltecos (GTQ) multiplicando por 7.80
let quetzales = dolares * 7.80;

// Mostramos en consola la conversión a Euros, redondeando a dos decimales con .toFixed(2)
console.log(dolares + " USD = " + euros.toFixed(2) + " EUR");

// Mostramos en consola la conversión a Pesos Salvadoreños con dos decimales
console.log(dolares + " USD = " + pesosSalva.toFixed(2) + " SVC");

// Mostramos en consola la conversión a Quetzales Guatemaltecos con dos decimales
console.log(dolares + " USD = " + quetzales.toFixed(2) + " GTQ");