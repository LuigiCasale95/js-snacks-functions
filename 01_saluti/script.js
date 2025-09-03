/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
const userName2 = "Luigi"

// Dichiara la funzione qui.
function aggiuntaCiao(testo) {
    let saluto = "Ciao " + testo

    return saluto
}




// Invoca la funzione qui e stampa il risultato in console
 console.log(aggiuntaCiao(userName2));



//Risultato atteso se si passa 'Mario': // ciao Mario
