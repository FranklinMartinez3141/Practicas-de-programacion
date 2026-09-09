import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entrada.question("Ingrese su nombre: ", function (nombre) {
    entrada.question("Ingrese su edad: ", function (edad) {
        entrada.question("Ingrese sus años de experiencia: ", function (experiencia) {
            edad = parseInt(edad);
            experiencia = parseFloat(experiencia);

            if (edad > 18 && experiencia > 0) {
                console.log("Empleado: " + nombre);
                console.log("Candidato válido");
            } else {
                console.log("Empleado: " + nombre);
                console.log("No cumple con los requisitos");
            }

            entrada.close();
        });
    });
});