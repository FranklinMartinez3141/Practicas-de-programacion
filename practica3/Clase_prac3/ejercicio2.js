import readline from "node:readline";

const ejer2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ejer2.question("Ingrese el primer número: ", function (num1) {
    ejer2.question("Ingrese el segundo número: ", function (num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (num1 > num2) {
            console.log(`El primer número (${num1}) es mayor que el segundo (${num2})`);
        } else if (num2 > num1) {
            console.log(`El segundo número (${num2}) es mayor que el primero (${num1})`);
        } else {
            console.log("Ambos números son IGUALES");
        }

        ejer2.close();
    });
});