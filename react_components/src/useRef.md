Obiettivi useRef()

//

Obiettivo useRef() #1
- Creare un riferimento ad un elemento DOM di interesse

* 2 Macro-Step

1° Macro-Step
  1. useRef(), a cui passiamo 'null' come parametro iniziale
  2. lo importiamo da React
  3. lo inseriamo all'interno di una variabile
  4. lo leghiamo all'elemento DOM di interesse, inserendo la 'prop' con il relativo valore
    (nel nostro caso, l'input per l'username utente)
  5. possiamo stamparlo in console, per vedere cosa contiene

2° Macro-Step
  1. Ricorriamo allo hook useEffect() per compiere un'azione al variare della variabile monitorata
    (nel nostro caso l'array sarà vuoto, perché si tratta della prima renderizzazione del componente).
  2. all'interno del primo parametro dello hook, della funzione, inseriamo l'istruzione per la quale:
    se il valore di 'inputRef' è diverso da 'null', 
    allora esegui l'istruzione descritta
    (usiamo l'operatore di concatenamento facoltativo, 
    che esegue il codice dopo il '?', 
    se la proprietà corrente è diversa da 'null' o 'undefined').
  3. chiamiamo il metodo 'focus()' sul riferimento al nodo DOM, 
    dal momento che la proprietà corrente di 'inputRef' conterrà un riferimento ad un elemento DOM.

//

Obiettivo useRef() #2
- Contenere valori tra un rendering e l'altro,
  valori che verranno memorizzati, 
  che non causeranno il re-rendering del componente, al loro variare,
  e che conterranno informazioni riguardo al fatto che il componente sia già stato montato o meno.

('MyForm.jsx')