// Importiamo la funzione 'createContext()' dal pacchetto React
import { createContext } from "react";

export const LanguageContext = createContext('en')

//

/*
'CreateContext()'
- riceve come parametro un valore di default/iniziale, in questo caso la lingua inglese (stringa 'en')
- restituisce un oggetto 'context', che si potrà esportare *
*/

//

/*  
* 'Oggetto' come 'contenitore', 
che contiene due componenti: 'provider' e 'consumer'
- Provider: componente-contenitore del valore
- Consumer: componente che permette di accedere al valore, 
  accessibile a qualsiasi componente, 
  facente parte del suo sotto-albero / dei suoi figli
*/

// 

/*
App.jsx

Inserendo dei componenti all'interno di 'LanguageContext.Provider',
ognuno di loro diventerà discendente di 'LanguageContext.Provider'.

Per 'LanguageContext.Provider' dovremo sempre specificare una prop 'value':
sarà il valore reso disponibile per tutti i componenti figli / discendenti del provider
*/