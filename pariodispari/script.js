// Funzione per generare un numero casuale compreso tra min (incluso) e max (incluso)
function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per verificare se un numero è pari
function isPari(numero) {
    return numero % 2 === 0;
}

// Funzione per calcolare la somma di due numeri
function somma(a, b) {
    return a + b;
}

// Chiediamo all'utente di scegliere pari o dispari e di inserire un numero da 1 a 5
var sceltaUtente = prompt("Scegli pari o dispari:");
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Chiamiamo la funzione per generare un numero random per il computer
var numeroComputer = generaNumeroRandom(1, 5);

// Chiamiamo la funzione per stabilire se la somma è pari o dispari
var risultato = isPari(somma(numeroUtente, numeroComputer));

// Dichiariamo il vincitore
var esito = (sceltaUtente === (risultato ? "pari" : "dispari")) ? "Hai vinto!" : "Hai perso. Il computer ha vinto.";

// Aggiorniamo il contenuto degli elementi HTML
document.getElementById("risultato").textContent = "Risultato: " + (risultato ? "pari" : "dispari");
document.getElementById("esito").textContent = esito;
