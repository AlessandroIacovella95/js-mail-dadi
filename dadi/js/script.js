//*const per generare un numero da 1 a 6//

const max = 6;
const min = 1;


//*Prendo il div user_number dal DOM//

const userNumber = document.getElementById('user_number');

//*Prendo il div cpu_number dal DOM//

const cpuNumber = document.getElementById('cpu_number');

//*Prendo il div result dal DOM//

const resultFinal = document.getElementById('result');

//*Prendo il button dal DOM//
const button = document.getElementById ('button_generate');


//* Button Function//
button.addEventListener('click', function() {
    
    //*Genero in maniera randomica due numeri, uno per il computer e uno per l'utente//

    const randomCpu = Math.floor (Math.random() * max)+ min;
    
    const randomUser = Math.floor (Math.random() * max)+ min;

    userNumber.innerHTML = "Numero Utente: " + randomUser

    cpuNumber.innerHTML = "Numero Computer: " + randomCpu

    //*Creo la condizione//

    if (randomCpu > randomUser ){
    resultFinal.innerText = 'Il computer ha vinto'
    } else if (randomUser > randomCpu ){
        resultFinal.innerText = "l'Utente ha vinto"
    } else{
        resultFinal.innerText= 'I numeri sono uguali, pareggio'
    }

})