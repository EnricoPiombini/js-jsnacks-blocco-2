//Generatore di “nomi cognomi” casuali: 
//il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const listaNomi = ["Enrico", "Mario", "Giuliana", "Pippo"]
const listaCognomi = ["Mazzei", "Baudo", "Greggio", "Sanipoili"];

const listaCasualeNomiCognomi = [];

for (let i = 0; i <= 4; i++) {
    const casualNames = Math.floor(Math.random() * 4)
    const casualSurnames = Math.floor(Math.random() * 4)
    listaCasualeNomiCognomi.push(listaNomi[casualNames] + " " + listaCognomi[casualSurnames]);
}
console.log(listaCasualeNomiCognomi);