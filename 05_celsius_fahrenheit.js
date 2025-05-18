/*
CONVERSOR DE TEMPERATURAS
Crea un conversor entre
grados Celsius y Fahrenheit. 
*/

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Conversor de Temperaturas:");
console.log("1. Celsius a Fahrenheit");
console.log("2. Fahrenheit a Celsius");

readline.question("Elige una opción: ", (choice) => {
    readline.question("Temperatura: ", (inputDegrees) => {
        const degrees = parseFloat(inputDegrees);

        if (choice === "1") {
            const fahrenheit = (degrees * 9/5) + 32;
            console.log(`${degrees}°C son ${fahrenheit}°F.`);
        } else if (choice === "2") {
            const celsius = (degrees - 32) * 5/9;
            console.log(`${degrees}°F son ${celsius}°C.`);
        } else {
            console.log("Opción no válida.");
        }

        readline.close();
    });
});
