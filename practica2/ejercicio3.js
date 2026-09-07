import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entrada.question("Ingrese su año de nacimiento: ", function(año){
    let fecha = new Date();
    let añoActual = fecha.getFullYear();
    let edad = añoActual - año;

    console.log("Tu edad aproximada es: " + edad) + " años.";
    entrada.close();
})