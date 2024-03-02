Hook personalizzati > funzioni.
Potranno prendere tutti i parametri che desideriamo e restituire qualsiasi cosa desideriamo: array, oggetti, numeri oppure nulla.

//

Devono seguire le regole generali degli hook:
- essere chiamati all'interno del livello superiore 
- non possono essere chiamati all'interno di blocchi condizionali e cicli
- essere chiamati sempre nello stesso ordine e nello stesso numero
- utilizzare convenzione nomenclatura, iniziando il nome con 'use'.

//

Obiettivo:

Creare hook personalizzati per creare una logica riutilizzabile, che potrà essere condivisa tra più componenti.
Scrivere una logica personalizzata e nascondere i dettagli di implementazione al loro interno e conservarli in componenti come 'unità di presentazione'.

// 

Importante:

Ogni componente che usa un hook personalizzato, crea la propria memoria e i propri valori.

Vedi 'App.jsx', in cui coesistono:
- useCounter(0) > hook personalizzato
- HookCounter > componente personalizzato con hook personalizzato

Entrambi possiedono una propria memoria e i propri valori, distinti e separati.