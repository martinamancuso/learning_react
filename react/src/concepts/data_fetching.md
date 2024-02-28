Data fetching with useEffect

//

API fetch
Funzione per interrogare un server remoto e ricevere una risposta (una Promise)

//

Peculiarità della funzione 'fetch'

- Restituisce una Promise
Su questa Promise, si potranno chiamare i metodi '.then' e '.catch' o utilizzare 'async'-'await';

- Non genera un errore, se la richiesta restituisce un codice di stato diverso da 200, ma solo quando c'è un errore di rete;

- Non sappiamo che tipo di risposta otterremo.
Per cui dovremo chiamare uno specifico metodo sulla risposta, sull'oggetto 'response', per estrarne il contenuto. 
Esiste una funzione specifica per ogni tipo di payload (carico utile/dati trasmessi), a seconda del tipo di risposta ottenuta (json, blob, testo).
6.57

//

Esempio - Index.jsx:
- Scrivo "fetch('https://api.github.com/users/martinamancuso')";
- Il fetch è basato sulla restituzione di una Promise, che conterrà il valore che si attende (la risposta dal server);
- Si attende il valore con il metodo '.then', in caso di risoluzione della Promise;
- Verrà restituito un oggetto, che conterrà lo stato della risposta.