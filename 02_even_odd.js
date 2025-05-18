/* 
PAR O IMPAR
Crea un programa que compruebe si
un número entero es par o impar.
*/

const input = prompt("introduce un número entero: ")

const number = parseInt(input)

if (isNaN(number)) {
  alert("Entrada no válida")
} else {
  if (number % 2 === 0) {
    alert(`Es ${number} par`)
  } else {
    alert(`Es ${number} impar`)
  }
}