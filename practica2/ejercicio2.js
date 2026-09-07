import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entrada.question("Ingrese el nombre del producto: ", function(name){
  entrada.question("Ingrese su precio unitario: ", function(precio){
    entrada.question("Ingrese la cantidad de producto: ", function(cantidad){
    precio = parseFloat(precio);
    cantidad = parseInt(cantidad);
    name = name.toUpperCase();
    let letras = name.slice(0,3);
    let precioTotal = precio * cantidad;

    console.log("Nombre: " + name);
    console.log("Primeras 3 letras: " + letras);
    console.log("Precio total: " + precioTotal.toFixed(2));
    entrada.close();
    })
  })
})