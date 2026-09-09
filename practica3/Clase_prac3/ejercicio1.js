import readline from "node:readline";

const ejer1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ejer1.question("Ingrese un número: ", function (numero) {
    numero = parseFloat(numero);


    if (numero > 0) {
        console.log("El número es POSITIVO");
    } else if (numero < 0) {
        console.log("El número es NEGATIVO");
    } else {
        console.log("El número es CERO");
    }

    ejer1.close();
});