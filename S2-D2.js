/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*i principali data type sono 5 
1-> String è una seguenza di caratteri, che possono essere lettere, numeri o simboli. Si scrivono tra virgolette singole ' o doppie ".
           Le stringhe sono importanti per la comunicazione di informazioni all'utente e per l'utente di comunicare nuovamente le informazioni al programma.

2-> number ha un solo tipo di numeri non fa distinzione tra numeri interi o virgola mobile.

3-> boolean può essere uno di due valori, vero o falso. I booleani sono usati per rappresentare i valori di verità associati al ramo logico della matematica, 
che informa gli algoritmi nell'informatica.

4->undefined rappresenta un valore che non esiste ancora. Alla variabile non è stato ancora assegnato un valore.

5-> null rappresenta un valore nullo. Ovvero a variabile è vuota
*/
/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
Il tipo di dati oggetto (object) JavaScript può contenere molti valori come coppie nome:valore (name:value).
Queste coppie forniscono un modo utile per archiviare e accedere ai dati. La sintassi letterale dell'oggetto
 è composta da coppie nome:valori separate da due punti con parentesi graffe su entrambi i lati { }.
es.
 let studente = { nome:"Marco" , Cognome="Dilorenzi" , dataDiNascita:"01/11/1987 , CodiceFiscale:"dlrzmrc87s41z330x"}; */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.*/


/* SCRIVI QUI LA TUA RISPOSTA 
let a = 12;
let b = 20;
let ris = a + b;

console.log (ris)*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA

let nome = "Fatna"; */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA 

console.log (x +"  Fatna");*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA 
 let name1 = "john"
 let name2 = "John"

 let confront = name1 === name2

 console.log(confront);*/