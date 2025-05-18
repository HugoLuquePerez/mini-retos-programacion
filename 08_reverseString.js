/*
INVERSIÓN DE CADENAS
Crea una función que invierta
una cadena de texto.
*/

function reverseString(text) {
    return text.split("").reverse().join("");
}

console.log(reverseString("Hola, mundo!"));
