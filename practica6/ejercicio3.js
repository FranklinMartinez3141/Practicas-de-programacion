import readline from "node:readline";

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Arreglo donde se guardan todas las calificaciones ingresadas
const notas = [];

// Calcula y muestra el promedio, la nota más alta y la más baja
function mostrarResultados() {
  // Acumulador de la suma; mayor y menor empiezan con la primera nota
  let suma = 0;
  let mayor = notas[0];
  let menor = notas[0];

  // Recorre todas las notas guardadas
  for (let i = 0; i < notas.length; i++) {
    // Suma la nota actual al total
    suma += notas[i];

    // Si la nota es más grande que la mayor, la reemplaza
    if (notas[i] > mayor) {
      mayor = notas[i];
    }
    // Si la nota es más pequeña que la menor, la reemplaza
    if (notas[i] < menor) {
      menor = notas[i];
    }
  }

  const promedio = suma / notas.length;

  // Muestra los resultados (el promedio con 2 decimales)
  console.log("Promedio: " + promedio.toFixed(2));
  console.log("Calificacion mas alta: " + mayor);
  console.log("Calificacion mas baja: " + menor);

  entrada.close();
}

// Pide una nota a la vez, repitiéndose hasta completar la cantidad
function pedirNota(numero, cantidad) {
  // Si ya se pidieron todas las notas, muestra los resultados y termina
  if (numero > cantidad) {
    mostrarResultados();
    return;
  }

  // Pide la calificación número "numero"
  entrada.question("Ingrese la calificacion "+ numero +": ", function(respuesta) {
    // Convierte la respuesta a número decimal y la guarda en el arreglo
    notas.push(parseFloat(respuesta));
    // Pide la siguiente nota (numero + 1 evita que se repita infinitamente)
    pedirNota(numero + 1, cantidad);
  });
}

// Pregunta cuántas calificaciones se van a ingresar
entrada.question("¿Cuántas calificaciones desea ingresar? ", function(respuesta){
  // Convierte la respuesta a número entero
  const cantidad = parseInt(respuesta);

  // Valida que sea un número mayor que 0
  if (isNaN(cantidad) || cantidad <= 0) {
    console.log("Debe ingresar un número mayor que 0.");
    entrada.close();
  } else {
    // Empieza a pedir las notas desde la número 1
    pedirNota(1, cantidad);
  }
});