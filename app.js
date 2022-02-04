
// Chiedo all'utente quanti km vuole percorrere
let kmUtente = parseInt (prompt("Quanti chilometri vuoi percorrere? (Digita qui il numero di km)" ));
console.log(kmUtente);

// Se l'utente non digita un numero (quindi NaN), ripeto nuovamente riga 3
if (isNaN(kmUtente)) {
    alert ("Inserisci un numero");
    let kmUtente = parseInt (prompt("Quanti chilometri vuoi percorrere? (Digita qui il numero di km)" ));
}
console.log(kmUtente)

