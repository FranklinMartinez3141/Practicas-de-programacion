import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entrada.question("Ingrese una calificacion entre (0-100): ", function(not1){
    entrada.question("Ingrese una calificacion entre (0-100): ", function(not2){
        not1 = parseInt(not1);
        not2 = parseInt(not2);

        if(not1 > not2){
            console.log("Nota 1 es mas alta: " + not1);
        } else if(not2 > not1){
            console.log("Nota 2 es mas alta: " + not2);
        } else{
            console.log("Las notas son iguales.");
        }

        entrada.close();
    }) 
})