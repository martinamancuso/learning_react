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