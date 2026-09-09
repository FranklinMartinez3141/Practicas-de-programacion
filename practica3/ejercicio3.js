import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

entrada.question("Ingrese el monto de compra: ", function(monto){
    monto = parseFloat(monto);
    let descuento = 0;
    if(monto > 100){
        descuento = 0.15;
    } else if(monto > 50){
        descuento = 0.1;
    } else {
        descuento = 0;
    }

    let totalPagar = monto - (descuento * monto);

    let mensajeDescuento = descuento > 0 ? (descuento * 100).toString() + "%" : "No hay descuento";

    console.log("Monto original: " + monto.toFixed(2));
    console.log("Descuento aplicado: " + mensajeDescuento);
    console.log("Total a pagar: " + totalPagar.toFixed(2));

    entrada.close();

     }) 