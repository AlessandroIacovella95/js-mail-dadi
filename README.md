# Mail e Gioco dei dadi

## Traccia Mail:
Chiedi all’utente la sua email, Controlla che sia nella lista di chi può accederes e stampa un messaggio appropriato sull’esito del controllo.

## Svolgimento:

- Ho un Array che contiene una serie di email autorizzate ad accedere
- Chiedo all'utente tramite prompt la sua email
- Controllo tramite **IF** se l'email inserita dall'utente è uguale a quelle presenti nell'array.
- In base al risultato andrò a stampare un messagio appropriato 


## Traccia Gioco dei dadi:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

## Svolgimento:
- Genero in maniera randomica un numero da 1 a 6 per il giocatore
- Genero un secondo numero in maniera randomica sempre da 1 a 6 per il computer
- stabilisco il vincitore in base al punteggio più alto:
  - **SE** il numero del computer è più alto del numero del giocatore, stampo computer come vincitore
  - **ALTRIMENTI SE** il numero del giocatore è più alto del numero del computer, stampo giocatore come vincitore
  - **ALTRIMENTI** stampo il messaggio che i numeri sono uguali ed è un pareggio
