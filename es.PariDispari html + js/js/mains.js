// Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

// creo prompt per memorizzare i dati inseriti dall'utente(scelta pari/dispari)
let sceltaUtente = prompt("Ciao, scegli pari o dispari!");
sceltaUtente = sceltaUtente.toLowerCase();
//.toLowerCase restituisce l'esatto contenuto della stringa nel nostro caso le parole pari dispari 
let sceltaPDUtente;

// creo condizione in modo che l'utente inserisca i dati in maniera corretta
if (sceltaUtente == "pari") {
    sceltaPDUtente = true;
} else if(sceltaUtente == "dispari") {
    sceltaPDUtente = false;
} else {
    sceltaPDUtente = null;
}

//creo un ciclo while in modo che l'utente possa scegliere solo pari e dispari
while (sceltaPDUtente == null ) {
    alert("La tua scelta non comprende pari o dispari!");
    sceltaUtente = prompt("Ciao, scegli pari o dispari");
    sceltaUtente = sceltaUtente.toLowerCase();
    if (sceltaUtente == "pari") {
        sceltaPDUtente = true;
    } else if(sceltaUtente == "dispari") {
        sceltaPDUtente = false;
    } else {
        sceltaPDUtente = null;
    }
}

// creo prompt per memorizzare il num scelto e uso parseInt per trasformare la stringa in numero
let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));

// uso isNan nel caso l'utente non abbia inserito un numero
while (isNaN(numeroUtente) || (numeroUtente < 1) || (numeroUtente > 5)) {
    alert("Non hai inserito un numero o non è un numero compreso tra 1 e 5!");
    numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));        
}

// creo le variabili con numero casuale
let numeroPC = getRandomNumber();
alert("Il numumero che ha scelto il pc è "+numeroPC);


let somma = (numeroUtente + numeroPC);
alert("La somma dei due numeri è "+somma);

// creo funzione numero casuale compreso tra 1 e 5
function getRandomNumber() {  
    let numero = Math.floor((Math.random() * 5) + 1);
    return numero;
}

// creo funzione che decide se la somma dei due numeri è pari e dispari
function pariDispari(sommaNumeri) {
    if (sommaNumeri % 2 == 0) {
        return true
    } 
    return false
}


let risultatoFinale = pariDispari(somma);

// creo condizione per informare il player del risultato
if (risultatoFinale == sceltaPDUtente) {
    alert("Complimenti, hai vinto!");
} else {
    alert("Mi dispiace, hai perso!");
}

