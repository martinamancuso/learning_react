**SWR, Stale While Revalidate**

Libreria di terze parti che gestisce il recupero dei dati da server remoti.

Ad esempio, gestisce automaticamente la memorizzazione nella cache e la duplicazione delle richieste.
Evita proprio di eseguire più richieste per recuperare nuovamente gli stessi dati.

E' necessario installare la libreria.

//

1. Installazione del pacchetto SWR 
Da terminale, npm install swr

2. Utilizzo SWR
Importare l'hook SWR dalla libreria, useSWR:
restituisce un oggetto da destrutturare
(Vedi 'GithubUsers2.jsx')

// 

L'oggetto restituito dalla funzione SWR è un oggetto che contiene:
- i dati restituiti dal server 
- o i dati salvati nella memoria cache

// 

**Funzione 'mutate()'**

Funzione di aggiornamento.

Utilizzata per aggiornare la cache locale o effettuare un re-fetch dei dati.

In generale, useSWR avrà sempre un valore all'interno della cache locale, quindi vedremo il valore che abbiamo memorizzato nella cache.
Quando la richiesta all'API degli utenti viene completata, i nuovi dati sovrascriveranno quelli precedentemente memorizzati nella cache.

