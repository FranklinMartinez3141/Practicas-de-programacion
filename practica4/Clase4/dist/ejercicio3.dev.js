"use strict";

/*
===========================================
EJERCICIO 3: Menú de conversiones
===========================================
Enunciado:
Muestre un menú con las siguientes opciones: 
1) Convertir de grados Celsius a Fahrenheit 
2) Convertir de grados Fahrenheit a Celsius 
3) Salir. 
Usando Switch, ejecute la opción seleccionada. 
Fórmulas: °F = °C × 9/5 + 32, °C = (°F - 32) × 5/9.
===========================================
*/
// Importar el módulo readline para solicitar datos al usuario
var readline = require('readline'); // Crear la interfaz de lectura para entrada y salida de datos


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); // Función para mostrar el menú de opciones

function mostrarMenu() {
  console.log('\n=== MENÚ DE CONVERSIONES ===');
  console.log('1. Convertir de Celsius a Fahrenheit');
  console.log('2. Convertir de Fahrenheit a Celsius');
  console.log('3. Salir');
} // Función para convertir de Celsius a Fahrenheit


function celsiusAFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
} // Función para convertir de Fahrenheit a Celsius


function fahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
} // Mostrar el menú y solicitar la opción al usuario


mostrarMenu();
rl.question('Seleccione una opción (1-3): ', function (opcion) {
  // Convertir la opción a número entero
  var opcionSeleccionada = parseInt(opcion); // Estructura Switch para evaluar la opción seleccionada

  switch (opcionSeleccionada) {
    case 1:
      // Convertir Celsius a Fahrenheit
      rl.question('Ingrese los grados Celsius: ', function (celsius) {
        var gradosCelsius = parseFloat(celsius);
        var resultado = celsiusAFahrenheit(gradosCelsius);
        console.log(gradosCelsius + '°C equivale a ' + resultado.toFixed(2) + '°F');
        rl.close();
      });
      break;

    case 2:
      // Convertir Fahrenheit a Celsius
      rl.question('Ingrese los grados Fahrenheit: ', function (fahrenheit) {
        var gradosFahrenheit = parseFloat(fahrenheit);
        var resultado = fahrenheitACelsius(gradosFahrenheit);
        console.log(gradosFahrenheit + '°F equivale a ' + resultado.toFixed(2) + '°C');
        rl.close();
      });
      break;

    case 3:
      // Salir del programa
      console.log('Saliendo del programa... ¡Hasta luego!');
      rl.close();
      break;

    default:
      // Opción no válida
      console.log('Opción no válida');
      rl.close();
  }
});