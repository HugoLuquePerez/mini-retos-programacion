/*
TABLAS DE MULTIPLICAR
Imprime todas las tablas de
multiplicar de 1 al 10.
*/

for(let t = 1; t <= 10; t++) {
  console.log(`Tabla del ${t}`)

  for(let n = 1; n <= 10; n++) {
    console.log(`${n} x ${t} = ${n * t}`);
  }
  console.log();
}

