// Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

//chiedo all'utente di scegliere pari o dispari
let sceltaUtentePD =  prompt("Scrivi pari o dispari!");
console.log(sceltaUtentePD);
//chiedo all'utente un numero tra 0 e 5
let sceltaNumUtnte= parseInt(prompt("Scegli un numero tra 0 e 5"));
console.log(sceltaNumUtnte);


//genero numero random per pc
function numeroRandom (min, max){

    //creo variabile generica
    let numero;
    //indico il valore della variabile
    numero = Math.floor( Math.random() * (max - min + 1) + min );
    //restituisco la variabile
    return numero;
}
//indico il valore che voglio e le assegno una variabile
let risultatoPc= numeroRandom(0,5);
console.log(risultatoPc);

//sommo i valori risultatoPc + sceltaNumUtente e creo una variabile

let sommaValori= sceltaNumUtnte + risultatoPc ;
console.log(sommaValori);


//confrontiamo se la somma è pari o dispari
let risultatoPD;
if(sommaValori %2 ==0){
    risultatoPD= " pari";
    console.log("la somma è pari");
}else{
    risultatoPD=" dispari";
    console.log("la somma è dispari");
}
let valoreFinalePD= risultatoPD;
console.log(valoreFinalePD);

//confronto la scelta iniziale dell'utente tra pari e dispari
//con il risultato finale che definisce il valore
//in base a questo si vince o si perde

