// Importamos la librería para solicitar datos por la consola
const readlineSync = require('readline-sync');

// Declaramos las variables iniciales
let saldo = 1000;  // Saldo inicial del cajero
let opcion = 0;    // Almacena la opción elegida por el usuario
let retiro = 0;    // Almacena la cantidad a retirar
let depo = 0;      // Almacena la cantidad a depositar

// Bucle DO...WHILE para mantener el menú abierto hasta que el usuario decida salir
do {
    // Mostramos el menú principal en la consola
    console.log("\n1) Consultar saldo\n2) Retirar\n3) Depositar\n4) Salir");
    
    // Solicitamos y leemos la opción del usuario convirtiéndola a número entero
    opcion = parseInt(readlineSync.question("Ingrese una opcion: "));

    // Estructura SWITCH para evaluar qué acción realizar según la opción elegida
    switch(opcion) {
        case 1: 
            // Opción 1: Muestra el saldo actual
            console.log("Su saldo es de: " + saldo);
            break;

        case 2: 
            // Opción 2: Solicita un retiro y valida que no exceda el saldo disponible
            retiro = parseFloat(readlineSync.question("Ingrese cuanto desea retirar: "));
            if(retiro <= saldo && retiro > 0){
                saldo = saldo - retiro; // Descuenta el retiro del saldo
                console.log("Su saldo actual es: " + saldo);
            } else {
                console.log("Cantidad inválida o excede su saldo.");
            }
            break;

        case 3: 
            // Opción 3: Solicita un depósito y valida que sea mayor a 0
            depo = parseFloat(readlineSync.question("Ingrese cuanto desea depositar: "));
            if(depo > 0){
                saldo += depo; // Suma el depósito al saldo actual
                console.log("Depósito exitoso. Su saldo actual es: " + saldo);
            } else {
                console.log("El depósito debe ser mayor a 0.");
            }
            break;

        case 4: 
            // Opción 4: Mensaje de despedida para cerrar el programa
            console.log("Adios");
            break;

        default: 
            // Mensaje por si el usuario ingresa una opción que no existe en el menú
            console.log("Opcion no valida");
    }

// El bucle se repite siempre y cuando la opción sea diferente de 4 (Salir)
} while(opcion != 4);