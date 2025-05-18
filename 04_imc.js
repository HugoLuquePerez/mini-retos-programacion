/*
IMC
Crea una calculadora del
índice de masa corporal.
*/

const weight = parseFloat(prompt("Peso en kg:"));
const height = parseFloat(prompt("Altura en m:"));

const imc = weight / (height * height);
alert(`IMC: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    alert("Peso bajo");
} else if (imc < 24.9) {
    alert("Peso normal");
} else if (imc < 29.9) {
    alert("Sobrepeso");
} else {
    alert("Obesidad");
}
