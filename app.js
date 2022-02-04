
// Chiedo all'utente quanti km vuole percorrere
let kmUtente = parseInt (prompt("Quanti chilometri vuoi percorrere? (Digita qui il numero di km)" ));
console.log(kmUtente);

// Se l'utente non digita un numero (quindi NaN), ripeto nuovamente riga 3
if (isNaN(kmUtente)) {
    alert ("Inserisci un numero");
    kmUtente = parseInt (prompt("Quanti chilometri vuoi percorrere? (Digita qui il numero di km)" ));
}
// console.log(kmUtente);


// Chiedo all'utente quanti anni ha
let userAge = parseInt (prompt("Quanti anni hai? (Digita qui"));  
console.log(userAge);

// Se l'utente non digita un numero (quindi NaN), ripeto nuovamente riga 15
if (isNaN(userAge)){
    alert("Digita un numero");
    userAge = parseInt (prompt("Quanti anni hai? (Digita qui)"));
}
// console.log(userAge);


// Prezzo al km (0.21 al KM)
const priceKm = 0.21;
console.log(priceKm); 


// Prezzo km inseriti dall'utente
var priceUser = kmUtente * priceKm;
console.log(priceUser);


// Sconto del 20%
const discount20 = 20;
console.log(discount20);


// Sconto del 40%
const discount40 = 40;
console.log(discount40);


