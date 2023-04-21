//console.log("ciao");

// Chiedere all’utente di inserire una parola
    //Creare un prompt
let parolaUtente= prompt("inserisci una parola");
// Creare una funzione per capire se la parola inserita è palindroma.
function parolaPalindroma (parola){
    //Trasformare il valore della variabile x in un array -> .split('') salvandolo in una nuova variabile
    let parolaArray= parola.split("");
    console.log (parolaArray);
    //Usare il metodo reverse() per invertire l'ordine degli elementi al suo interno.
    let parolaRevers = parolaArray.reverse("");
    console.log(parolaRevers);
    //Trasformare l'array invertito in una stringa -> .join('')
    let parolaJoy= parolaRevers.join("");
    console.log(parolaJoy);
    //Confrontare la variabile parolaUtante cioè il promt con la variabile parolaJoy
    if( parolaUtente === parolaJoy){
        alert("La parola inserita è palindroma!👍");
    }else{
        alert("La parola inserita non è palindroma!👎")
    }
}
parolaPalindroma(parolaUtente);
