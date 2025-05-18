/*
ANAGRAMAS
Comprueba si dos cadenas
de texto son anagramas.
*/

function areAnagrams(string1, string2) {
    const normalize = str => str.toLowerCase().split("").sort().join("");
    return normalize(string1) === normalize(string2);
}

console.log(areAnagrams("Roma", "Amor"));    // true
console.log(areAnagrams("Amiga", "Magia"));  // true
console.log(areAnagrams("Hola", "Mundo"));   // false
