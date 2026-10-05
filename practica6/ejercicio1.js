import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

// Pide un número al usuario y ejecuta la función cuando responde
entrada.question("Ingrese un numero positivo : ", function(number){
    // Convierte el texto ingresado a número entero
    number = parseInt(number);
    // Variable que acumula el resultado (empieza en 1 porque se multiplica)
    let factorial = 1;

    // Recorre desde el número hasta 1, bajando de uno en uno
    for(let i = number; i >= 1;i--){
        // Multiplica el resultado por cada número (5 x 4 x 3 x 2 x 1)
        factorial *= i;
    }

    console.log("Factorial: " + factorial);

    entrada.close();
})