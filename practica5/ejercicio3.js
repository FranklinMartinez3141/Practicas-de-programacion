import readline from "node:readline";

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;

console.log("Cajero Automático");
console.log("1. Consultar saldo\n2. Retirar dinero\n3. Depositar dinero\n4. Salir");

entrada.question("Elige una opcion: ", function(opcion){
    opcion = parseInt(opcion);
    
    switch(opcion){
        case 1: 
            console.log("Saldo actual: $" + saldo);
            entrada.close();
            break;
            
        case 2:
            entrada.question("Ingrese el monto a retirar (multiplo de 5): ", function(monto){
                monto = parseFloat(monto);
                
                // Validar mayor a 0, múltiplo de 5 y que no exceda el saldo
                if (monto <= 0) {
                    console.log("Error: El monto a retirar debe ser mayor a 0.");
                } else if (monto % 5 !== 0) {
                    console.log("Error: El monto debe ser múltiplo de $5.");
                } else if (monto > saldo) {
                    console.log("Error: No tiene saldo suficiente.");
                } else {
                    saldo -= monto;
                    console.log("Retiro exitoso. Saldo actual: $" + saldo);
                }
                entrada.close();
            });
            break;
            
        case 3:
            entrada.question("Ingrese la cantidad a depositar (maximo $5000): ", function(depo){
                depo = parseFloat(depo);
                
                // Validar mayor a 0 y que no exceda $5000
                if (depo <= 0 || depo > 5000) {
                    console.log("ERROR: Cantidad inválida (debe ser mayor a 0 y máximo $5000).");
                } else {
                    saldo += depo;
                    console.log("Depósito exitoso. Saldo actual: $" + saldo);
                }
                entrada.close();
            });
            break;
            
        case 4:
            console.log("Gracias por usar el cajero");
            entrada.close();
            break;
            
        default:
            console.log("Opcion no válida");
            entrada.close();
    }
});