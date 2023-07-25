//*Prendo input utente dal DOM//
const inputUserEmail = document.getElementById('user-mail')

//*Prendo il button dal DOM//
const buttonSend = document.getElementById('send')

//*Prendo lo span dal DOM//
const messageAccess = document.getElementById('message')

//* Ho un Array che contiene una serie di email autorizzate ad accedere//
const emails = ['admin@gmail.com', 'user@gmail.com', 'boolean@gmail.com', 'employee@gmail.com'];

buttonSend.addEventListener('click', function() {
    
    let mailFound = 'Spiacenti, Accesso negato. Riprova'

     const userEmail = inputUserEmail.value;

    // * Creo ciclo for//
    for (let i = 0; i < emails.length; i++){
        const email = emails [i]
        //*Controllo tramite **IF** se l'email inserita dall'utente è uguale a quelle presenti nell'array.//
        if( userEmail == email) {
            mailFound = 'Email trovata, Benvenuto'
        }
    }
    messageAccess.innerText = mailFound
})







