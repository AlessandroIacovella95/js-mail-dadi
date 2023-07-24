const max = 6;
const min = 1;

const randomCpu = Math.floor (Math.random() * max)+ min;

console.log("Numero Computer: " + randomCpu);

const randomUser = Math.floor (Math.random() * max)+ min;

console.log("Numero Utente: " + randomUser);

if (randomCpu > randomUser ){
    console.log('il computer ha vinto')
} else if (randomUser > randomCpu ){
    console.log('utente ha vinto');
} else{
    console.log('i numeri sono uguali, pareggio')
}