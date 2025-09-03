/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
let nuovoArray = []
nuovoArray.push(arrayFirstLetter(names))
console.log(nuovoArray)


// Invoca la funzione qui e stampa il risultato in console
//creo una funzione che permetta di aggiungere un array
function arrayFirstLetter (array) {
    let firstLetter = [];  //creo una variabile contenente un array vuoto

    for (let i = 0; i < array.length; i++) {   //creo un ciclo che percorre ogni elemento dell'array
        
         firstLetter.push(array[i].charAt(0)) /*push all'interno dell'array vuoto della prima lettera di ogni elemnto dell'array selezionato*/
         
//          console.log(firstLetter)
    }
    return firstLetter /* faccio ritornare come risultato della funzione la vr. array vuota creata all'inizio */


}


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]









/* SOLUZIONE :MAP */
/* // Usiamo il metodo map per creare un nuovo array con le stringhe modificate
let nuovoArray = names.map(function(elemento) {
  // Verifica se l'elemento è una stringa e se è vuoto
  if (typeof elemento === 'string' && elemento.length > 0) {
    // Rimuove tutte le lettere tranne la prima
    return elemento.charAt(0);
  }
});
console.log(nuovoArray); */