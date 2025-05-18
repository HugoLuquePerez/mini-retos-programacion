/* 
DECIMAL A BINARIO
Crea un programa se encargue de
transformar un número decimal a binario.
*/

function decimalToBinary(decimal) {
    let binary = "";

    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }

    return binary === "" ? "0" : binary;
}

console.log(decimalToBinary(387));
