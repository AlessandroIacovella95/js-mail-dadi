//*Prendo input utente dal DOM//
const inputUserEmail = document.getElementById('user-mail')

//*Prendo il button dal DOM//
const buttonSend = document.getElementById('send')

//*Predno lo span dal DOM//
const messageAccess = document.getElementById('message')

//* Ho un Array che contiene una serie di email autorizzate ad accedere//
const email = ['admin@gmail.com', 'user@gmail.com', 'boolean@gmail.com', 'employee@gmail.com'];

buttonSend.addEventListener('click', function() {
    
    let mailFound = 'Spiacenti, Accesso negato. Riprova'

     const userEmail = inputUserEmail.value;

    // * Creo ciclo for//
    for (let i = 0; i < email.length; i++){
    
        //*Controllo tramite **IF** se l'email inserita dall'utente è uguale a quelle presenti nell'array.//
        if( userEmail == email[i]) {
            mailFound = 'Email trovata, Benvenuto'
        }
    }
    messageAccess.innerText = mailFound
})







