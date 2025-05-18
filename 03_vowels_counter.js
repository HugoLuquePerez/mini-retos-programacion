/* 
CONTADOR DE VOCALES
Crea un programa que cuente cuantas
vocales tiene una cadena de texto.
*/

const vowels = "aeiou"
let counter = 0

const text = prompt("Introduce una cadena de texto:").toLowerCase()

for (let char of text) {
  if(vowels.includes(char)) {
    counter++
  }
}

console.log(`Total vocales: ${counter}`);