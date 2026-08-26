"use strict";

// Declaramos la variable 'radio' y le asignamos un valor numérico
var radio = 2.5; // Calculamos el perímetro (circunferencia) usando la fórmula: 2 * pi * radio

var perimetro = 2 * 3.14159 * radio; // Calculamos el área usando la fórmula: pi * radio al cuadrado (radio ** 2)

var area = 3.14159 * Math.pow(radio, 2); // Mostramos en la consola el valor del radio

console.log("Radio: " + radio); // Mostramos en la consola el perímetro, redondeado a dos decimales con .toFixed(2)

console.log("Perimetro: " + perimetro.toFixed(2)); // Mostramos en la consola el área, también redondeada a dos decimales

console.log("Area: " + area.toFixed(2));