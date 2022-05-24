// INSERISCI UN NUMERO, SE PARI STAMPA IL NUMERO, SE DISPARI STAMPO IL NUMERO SUCCESSIVO

// CHIEDO IL NUMERO ALL'UTENTE
const numeroUtente = parseInt(prompt ('Inserisci il numero'));

// PONGO LE CONDIZONI NEL CASO IL NUMERO SIA PARI O DISPARI
if(numeroUtente % 2 === 0){
    console.log(numeroUtente)
}
else{
    console.log(numeroUtente + 1);
}