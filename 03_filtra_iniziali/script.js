/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let userLetter = prompt("Inserisci una lettera per cercare i nomi presenti nella lista").toUpperCase();
console.log(`Lettera scelta dall'utente ${userLetter}`)

let newArray = [] //nuovo array

// Dichiara la funzione qui.
//creo una funzione che permetta di aggiungere un array
function arrayForLetter (userLetter, array) {
let newArray = [];//creazione array vuoto

for (let i = 0; i < array.length; i++) { //creazione ciclo

    /* Se la prima lettera = a scelta utente allora push in newArray */
    firstLetter = array[i].charAt(0)
    console.log(firstLetter);

    if (firstLetter === userLetter) {
        newArray.push(array[i])
    }
    
    return newArray
}

}

// Invoca la funzione qui e stampa il risultato in console

newArray.push(arrayForLetter(userLetter, names))
console.log(newArray)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]