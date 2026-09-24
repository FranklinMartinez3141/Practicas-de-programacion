import readline from "node:readline";

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Ingrese tres numero:");

entrada.question("Ingrese un numero: ", function (a) {
    entrada.question("Ingrese un numero: ", function (b) {
        entrada.question("Ingrese un numero: ", function (c) {
            a = parseInt(a);
            b = parseInt(b);
            c = parseInt(c);
            let mayor = a;

            if (a == b && b == c) {
                console.log("Los tres numeros son iguales.");
            } else if (a != b && b != c && a != c) {
                console.log("Los tres numeros son diferentes.");
            } else if (a == b || b == c || a == c) {
                console.log("Hay dos numeros iguales");
            }
            if (mayor < b) {
                mayor = b;
            }
            if (mayor < c) {
                mayor = c;
            }

            let menor = a;
            if (menor > b) {
                menor = b;
            }
            if (menor > c) {
                menor = c;
            }
            console.log("Número menor: " + menor);

            if (a < 0 || b < 0 || c < 0) {
                console.log("Hay numeros negativos");
            }
            console.log("Numero mayor: " + mayor);

            entrada.close();
        })
    })
})