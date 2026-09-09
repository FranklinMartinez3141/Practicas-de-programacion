import readline from "node:readline";

const ejer3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ejer3.question("Ingrese la calificación (0-100): ", function (calificacion) {
    calificacion = parseFloat(calificacion);

    console.log("Calificación ingresada: " + calificacion);
    
    if (calificacion >= 60) {
        console.log("Estado: APROBADO");
    } else {
        console.log("Estado: REPROBADO");
    }

    ejer3.close();
});