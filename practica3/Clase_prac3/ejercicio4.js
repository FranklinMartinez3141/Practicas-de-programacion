import readline from "node:readline";

const ejer4 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ejer4.question("Ingrese su edad: ", function (edad) {
    edad = parseInt(edad);

    if (edad >= 0 && edad <= 12) {
        console.log("Categoría: NIÑO");
    } else if (edad >= 13 && edad <= 17) {
        console.log("Categoría: ADOLESCENTE");
    } else if (edad >= 18 && edad <= 64) {
        console.log("Categoría: ADULTO");
    } else if (edad >= 65) {
        console.log("Categoría: ADULTO MAYOR");
    } else {
        console.log("Edad no válida");
    }

    ejer4.close();
});