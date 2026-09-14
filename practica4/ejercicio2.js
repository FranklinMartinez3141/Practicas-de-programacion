import readline from "node:readline";

// Lectura de datos
const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

// Solicitar al usuario su nivel de estudios mostrando las opciones
entrada.question("Ingrese su nivel de estudio: \n1.Primaria\n2.Secundaria\n3.Bachillerato\n4.Universidad\n5.Postgrado\n", function(nivel){
    // Convertir el valor ingresado a un número entero
    nivel = parseInt(nivel);
    
    // Evaluar el número ingresado mediante Switch
    switch(nivel){
        case 1: 
            console.log("Su nivel es Primaria.");
        break;
        case 2:
            console.log("Su nivel es Secundaria.");
        break;
        case 3:
            console.log("Su nivel es Bachillerato.");
        break;
        case 4:
            console.log("Su nivel es Universidad.");
        break;
        case 5:
            console.log("Su nivel es Postgrado.");
        break;
        default:
            // Mensaje si se ingresa un número fuera del rango 1-5
            console.log("Nivel no valido");
    }
    
    // Cerrar la interfaz de lectura
    entrada.close();
})