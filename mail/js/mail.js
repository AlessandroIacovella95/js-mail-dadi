//* Ho un Array che contiene una serie di email autorizzate ad accedere//
const email = ['admin@gmail.com', 'user@gmail.com', 'boolean@gmail.com', 'employee@gmail.com'];

// * Chiedo all'utente tramite prompt la sua email//

const userEmail = prompt('Inserisci la tua email', 'admin@gmail.com');

let mailFound = 'Spiacenti, Accesso negato. Riprova'

// * Creo ciclo for//
for (let i = 0; i < email.length; i++){

    //*Controllo tramite **IF** se l'email inserita dall'utente è uguale a quelle presenti nell'array.//
    if( userEmail == email[i]) {
        mailFound = 'Email trovata, Benvenuto'
    }
}
console.log(mailFound);
