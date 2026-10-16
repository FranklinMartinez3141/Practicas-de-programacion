const readlineSync = require('readline-sync');

// 1. Función que recibe una cadena y devuelve la cantidad de vocales
function contarVocales(texto) {
  let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++; // Incrementamos si el carácter actual es una vocal
    }
  }
  return contador;
}

// 2. Función que recibe una cadena y devuelve la cadena invertida
function invertirCadena(texto) {
  let textoInvertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i]; // Construimos la cadena al revés letra por letra
  }
  return textoInvertido;
}

// 3. Función que recibe una cadena y determina si es palíndromo usando operadores lógicos y de comparación
function esPalindromo(texto) {
  // Limpiamos espacios y convertimos a minúsculas para una correcta comparación
  let textoLimpio = texto.toLowerCase().replace(/[\W_]/g, '');
  let textoAlReves = invertirCadena(textoLimpio);
  
  // Retorna true si son exactamente iguales, false en caso contrario
  return textoLimpio === textoAlReves;
}

// Función principal para interactuar con el usuario
function ejecutarManejoCadenas() {
  let fraseUsuario = readlineSync.question("Escribe una palabra o frase: ");

  let totalVocales = contarVocales(fraseUsuario);
  let fraseInvertida = invertirCadena(fraseUsuario);
  let resultadoPalindromo = esPalindromo(fraseUsuario);

  console.log("\n--- RESULTADOS DE ANÁLISIS DE TEXTO ---");
  console.log(`Cantidad de vocales: ${totalVocales}`);
  console.log(`Texto invertido: ${fraseInvertida}`);
  console.log(`¿Es palíndromo?: ${resultadoPalindromo ? "Sí, se lee igual al derecho y al revés" : "No"}`);
}

ejecutarManejoCadenas();