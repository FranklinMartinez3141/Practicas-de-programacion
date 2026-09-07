import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entrada.question("Ingrese su nombre completo: ", function(name){
    name = name.toUpperCase();
    let newName = name.slice(0,4);
    let minus = name.toLowerCase();

    console.log("Resultados")
    console.log("Nombre en mayuscula: " + name);
    console.log("Primeras 4 letras: " + newName);
    console.log("Minusculas: " + minus);

    entrada.close();
})