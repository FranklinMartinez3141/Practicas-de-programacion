import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

// Pide el número N al usuario
entrada.question("Ingrese un numero n: ", function(n){
    // Convierte el texto ingresado a número entero
    n = parseInt(n);
    // Indica si N es primo (se asume que sí hasta demostrar lo contrario)
    let primo = true;
    // Arreglo que no se usa en el programa (se puede borrar)
    let p = [];
    
    // Los números menores o iguales a 1 no son primos
    if (n <= 1) {
        primo = false;
    } else {
        p[0] = 2;
        p[1] = 3;
        // Revisa si algún número desde 2 divide a N
        // Solo llega hasta la raíz de N (i * i <= n) para ser más rápido
        for (let i = 2; i * i <= n; i++) {
            // Si el residuo es 0, N es divisible: no es primo
            if (n % i === 0) {
                primo = false;
                // Sale del ciclo porque ya no hace falta seguir revisando
                break;
            }
        }
    }

    console.log("Numeros primos entre 1 y " + n);
    // Arreglo donde se guardan todos los primos encontrados
    let primos = [];

    // Recorre todos los números desde 2 hasta N
    for (let i = 2; i <= n; i++) {
        // Se asume que el número actual es primo
        let esPrimo = true;

        // Revisa si algún número lo divide exactamente
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                // Tiene otro divisor, entonces no es primo
                esPrimo = false;
                break;
            }
        }

        // Si nadie lo dividió, lo guarda en la lista de primos
        if (esPrimo) {
            primos.push(i);
        }
    }

    // Muestra si N es primo y la lista de primos de 1 hasta N
    if (primo) {
        console.log(n + " es un numero primo");
        console.log(primos.join(", "));
    } else {
        console.log(n + " no es un numero primo");
    }

    entrada.close();
});