const readlineSync = require('readline-sync');

function calcularAreaCirculo(radio) {
  return Math.PI * (radio * radio);
}
function calcularPerimetroCirculo(radio) {
  return 2 * Math.PI * radio;
}

function calcularAreaCuadrado(lado) {
  return lado * lado;
}
function calcularPerimetroCuadrado(lado) {
  return lado * 4;
}

function calcularAreaRectangulo(base, altura) {
  return base * altura;
}
function calcularPerimetroRectangulo(base, altura) {
  return 2 * (base + altura);
}

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}
function calcularPerimetroTriangulo(l1, l2, l3) {
  return l1 + l2 + l3;
}

// Función principal que maneja el menú con Switch
function ejecutarCalculadoraGeometrica() {
  console.log("Elige una figura geométrica:");
  console.log("1. Círculo");
  console.log("2. Cuadrado");
  console.log("3. Rectángulo");
  console.log("4. Triángulo");

  let opcion = readlineSync.question("Digita el número de tu opción: ");

  // Estructura Switch para direccionar según la elección del usuario
  switch (opcion) {
    case '1':
      let radio = parseFloat(readlineSync.question("Ingresa el radio del círculo: "));
      console.log(`Área: ${calcularAreaCirculo(radio).toFixed(2)}`);
      console.log(`Perímetro: ${calcularPerimetroCirculo(radio).toFixed(2)}`);
      break;

    case '2':
      let lado = parseFloat(readlineSync.question("Ingresa el valor del lado del cuadrado: "));
      console.log(`Área: ${calcularAreaCuadrado(lado).toFixed(2)}`);
      console.log(`Perímetro: ${calcularPerimetroCuadrado(lado).toFixed(2)}`);
      break;

    case '3':
      let baseRect = parseFloat(readlineSync.question("Ingresa la base del rectángulo: "));
      let alturaRect = parseFloat(readlineSync.question("Ingresa la altura del rectángulo: "));
      console.log(`Área: ${calcularAreaRectangulo(baseRect, alturaRect).toFixed(2)}`);
      console.log(`Perímetro: ${calcularPerimetroRectangulo(baseRect, alturaRect).toFixed(2)}`);
      break;

    case '4':
      let baseTri = parseFloat(readlineSync.question("Ingresa la base del triángulo: "));
      let alturaTri = parseFloat(readlineSync.question("Ingresa la altura del triángulo: "));
      let l1 = parseFloat(readlineSync.question("Ingresa el lado 1: "));
      let l2 = parseFloat(readlineSync.question("Ingresa el lado 2: "));
      let l3 = parseFloat(readlineSync.question("Ingresa el lado 3: "));
      
      console.log(`Área: ${calcularAreaTriangulo(baseTri, alturaTri).toFixed(2)}`);
      console.log(`Perímetro: ${calcularPerimetroTriangulo(l1, l2, l3).toFixed(2)}`);
      break;

    default:
      console.log("Opción no válida. Por favor, selecciona un número del 1 al 4.");
      break;
  }
}
ejecutarCalculadoraGeometrica();