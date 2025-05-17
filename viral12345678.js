/*
RETO VIRAL 12345678
Simula el reto viral 12345678.
Crea una función que cuente de
1 a 8, eliminando cada vez un
dígito y mostrando un espacio en
blanco en su lugar, de manera
ascendente y descendente.
 */

// Parte superior del patrón
for (let i = 1; i < 9; i++) {
    let line = " ".repeat(i - 1);
    for (let j = i; j < 9; j++) {
        line += j;
    }
    console.log(line);
}

// Parte inferior del patrón
for (let i = 8; i > 0; i--) {
    let line = " ".repeat(i - 1);
    for (let j = i; j < 9; j++) {
        line += j;
    }
    console.log(line);
}
