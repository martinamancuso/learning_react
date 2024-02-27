Context API

Considerando i componenti come rami di un albero, 
la 'context API' fornisce un modo per passare i dati da un componente ad un altro, 
senza dover passare manualmente i dati dal ramo di origine a ciascuno dei componenti, 
lungo la strada verso il componente di destinazione.

//

Due attori

- Provider > contenitore che fornisce il valore specifico a cui accedere
- Consumer > oggetto che permette di accedere al valore, all'interno del provider


//

Per creare un contesto

Usare una funzione esportata dal pacchetto React, chiamata 'createContext()':
- prende un singolo parametro, il valore di default del contesto
- restituisce un oggetto che contiene due componenti, provider e consumer

//

Esempio:
Creare un contesto linguistico, all'interno del quale contenere la lingua corrente, che l'utente ha deciso di utilizzare
(Container.jsx e App.jsx)