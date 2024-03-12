Designare una configurazione globale, 
per creare file di ambiente,
in cui impostare variabili di ambiente.

E' possibile crearli nel file 'App.jsx'.

//

**Due tipi di 'environment file':**
1. Salvati nel controllo del codice sorgente
2. NON salvati nel controllo del codice sorgente

I primi conterranno valori condivisi 
con tutti gli sviluppatori che stanno lavorando all'applicazione.

I secondi, invece, sono file che contengono valori
che vorresti mantenere privati.

//

**Creare un 'environment file' che venga inviato al controllo del codice sorgente su Git:**

- Creare un file di ambiente all'interno della nostra cartella principale, del nostro codice sorgente

- Tale file può essere un file di ambiente di sviluppo, di test o di produzione

- Si crea con il nome '.env.development':
tutto quello che verrà scritto al suo interno, sarà visibile su GitHub,
e verrà visto da tutti gli sviluppatori che lavoreranno su questa applicazione.

- Possiamo usare questo file per impostare qualcosa, 
come le variabili di configurazione per la nostra applicazione.

- Per rendere disponibile un valore, per la nostra applicazione (quindi qualcosa che il browser sarà in grado di vedere direttamente), sarà necessario anteporre, al nome della variabile d'ambiente, il nome dell'app React.