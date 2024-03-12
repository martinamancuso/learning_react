Designare una configurazione globale, 
per creare file di ambiente,
in cui impostare 'variabili di ambiente'.

E' possibile crearli nel file 'App.jsx'.

//

**Due tipi di 'environment file':**
1. Salvati nel controllo del codice sorgente
2. NON salvati nel controllo del codice sorgente

- I primi conterranno valori condivisi con tutti gli sviluppatori che stanno lavorando all'applicazione.

- I secondi, invece, sono file che rimarranno privati e non verranno tracciati nel codice sorgente.

//

**Creare un 'environment file' che venga inviato al controllo del codice sorgente su Git:**

- Creare un file di ambiente all'interno della propria cartella principale, del codice sorgente.
- Tale file può essere un file di ambiente di sviluppo, di test o di produzione.

- Si crea con il nome '.env.development',
il file verrà tracciato nel controllo del codice sorgente: 
tutto quello che verrà scritto al suo interno, 
sarà visibile su GitHub,
e verrà visto da tutti gli sviluppatori che lavoreranno sulla stessa applicazione.

- Usare questo file, per impostare le variabili di configurazione, per la propria applicazione.

- Per rendere disponibile un valore per l'applicazione, sarà necessario anteporre, al nome della variabile d'ambiente, il nome dell'app React.
(Vedi '.env.development')

//

**Come accedere ai valori delle variabili di ambiente, da uno dei propri file?** 

Si inserisce nei propri file, il puntatore 'process.env REACT_APP_SERVER_URL'.
Si utilizza l'oggetto 'process.env' per accedere alle variabili di ambiente.

**Esempio con 'useGithubUser.jsx'**
- const { data, error, mutate } = useSWR(`https://api.github.com/users/${githubUser}`)
- const { data, error, mutate } = useSWR(`${process.env.REACT_APP_SERVER_URL/users/${githubUser}`)

**Esempio '.env.development'**
URL del server che verrà usato all'interno della propria applicazione
- REACT_APP_SERVER_URL=https.api.github.com

Nello specifico, in quest'esempio, 
solo le variabili di ambiente che sono precedute da 'REACT_APP' saranno accessibili all'interno dell'applicazione React in questione.

//

**File non tracciati all'interno del codice sorgente**

'.env.development.local'

Il contenuto di questo file non verrà tracciato e non verrà pubblicato su Git.