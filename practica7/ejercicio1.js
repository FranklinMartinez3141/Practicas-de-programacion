// 1. Importamos la librería 'readline-sync' para poder recibir datos que el usuario escriba por la consola de forma síncrona.
const readlineSync = require('readline-sync');

// 2. Generamos el número secreto de manera aleatoria entre 1 y 50.
const numeroSecreto = Math.floor(Math.random() * 50) + 1;

// 3. Creamos una bandera (bandera lógica) para saber si el usuario ya adivinó el número (empieza en falso).
let adivinado = false;

// 4. Inicializamos un contador en 0 para llevar la cuenta de cuántos intentos va realizando el usuario.
let conta = 0;

// 5. Iniciamos un bucle WHILE que se repetirá indefinidamente MIENTRAS 'adivinado' siga siendo falso (!adivinado).
while(!adivinado){
    
    // 6. Solicitamos un número al usuario, lo guardamos y convertimos inmediatamente a número entero (parseInt).
    let num = parseInt(readlineSync.question("Trate de adivinar el numero:"));
    
    // 7. Incrementamos el contador en 1 cada vez que el usuario hace un intento.
    conta ++;

    // 8. Evaluamos si el número secreto es MAYOR que el que ingresó el usuario.
    if(numeroSecreto > num){
        console.log("El numero a adivinar es mayor.");
    
    // 9. Si no es mayor, evaluamos si el número secreto es MENOR que el que ingresó.
    } else if(numeroSecreto < num){
        console.log("El numero a adivinar es menor");
    
    // 10. Si no es mayor ni menor, significa que ¡ACERTÓ!
    } else {
        console.log("Numero adivinado: " + numeroSecreto);
        console.log("Total de intentos: " + conta); // Mostramos el total de intentos acumulados
        adivinado = true; // Cambiamos la bandera a true para romper el bucle y terminar el juego
    }
}