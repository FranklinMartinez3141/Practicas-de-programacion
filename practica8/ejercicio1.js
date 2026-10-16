const readlineSync = require('readline-sync');

function obtenerLetra(calificacion) {
  if (calificacion >= 90) {
    return 'A';
  } else if (calificacion >= 80) {
    return 'B';
  } else if (calificacion >= 70) {
    return 'C';
  } else if (calificacion >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Función que recibe un arreglo de calificaciones y devuelve el promedio
function calcularPromedio(arregloNotas) {
  let sumaTotal = 0;
  for (let i = 0; i < arregloNotas.length; i++) {
    sumaTotal += arregloNotas[i]; // Sumamos todas las notas acumuladas
  }
  return sumaTotal / arregloNotas.length; // Retornamos el promedio dividiendo entre el total
}

// Función principal que ejecuta la lógica de la tarea 1
function ejecutarSistemaCalificaciones() {
  let totalCalificaciones = parseInt(readlineSync.question('¿Cuántas calificaciones deseas ingresar? '));
  let notas = [];

  // Bucle para solicitar cada calificación y guardarla en el arreglo
  for (let i = 0; i < totalCalificaciones; i++) {
    let notaActual = parseFloat(readlineSync.question(`Ingresa la calificación ${i + 1} (0-100): `));
    notas.push(notaActual);
  }

  console.log("\n--- RESULTADOS DE CALIFICACIONES ---");
  
  // Mostramos cada calificación con su respectiva letra utilizando operadores de comparación
  for (let i = 0; i < notas.length; i++) {
    let letra = obtenerLetra(notas[i]);
    console.log(`Calificación ${i + 1}: ${notas[i]} -> Letra: ${letra}`);
  }

  // Calculamos el promedio y su letra final
  let promedioFinal = calcularPromedio(notas);
  let letraPromedio = obtenerLetra(promedioFinal);

  console.log(`\nPromedio total: ${promedioFinal.toFixed(2)}`);
  console.log(`Letra correspondiente al promedio: ${letraPromedio}`);
}
ejecutarSistemaCalificaciones();