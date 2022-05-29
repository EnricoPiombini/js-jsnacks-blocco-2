//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari

let numeriInteri = [2, 4, 5, 7, 8,10, 12,23, 34];
let numeriDispari = [];
let somma = 0


for (let i = 0; i <= numeriInteri.length; i++) {
    const numeroCorrente = numeriInteri[i];
    if (numeroCorrente % 2 === 1) {
        numeriDispari.push(numeroCorrente);
        somma += numeroCorrente
    }
}
console.log(numeriDispari)
console.log(somma);