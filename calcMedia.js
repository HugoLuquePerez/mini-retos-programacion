/*
MEDIA
Calcula la media de un
listado de números.

Dos jugadores con una lista de puntos y deberemso sacar medias 
*/

const kim_yeji = [9.8, 10.4, 10.5, 9.3, 9.7, 10.7, 10.4, 9.9, 10.4, 10.4, 10.0, 10.3, 9.9, 10.2, 9.8, 10.1, 10.2, 9.7, 10.2, 10.0, 9.4, 10.5, 9.7, 9.8];
const yusuf_dikec = [9.0, 10.3, 10.2, 10.6, 10.1, 10.6, 9.9, 10.5, 9.2, 9.5, 10.8, 10.7, 10.4, 10.6, 9.1];

function mean(ns) {
    const sum = ns.reduce((a, b) => a + b, 0);
    return sum / ns.length;
}

const kim_mean = mean(kim_yeji);
const yusuf_mean = mean(yusuf_dikec);

console.log(`Media Kim ${kim_mean.toFixed(1)}`);
console.log(`Media Yusuf ${yusuf_mean.toFixed(1)}`);
