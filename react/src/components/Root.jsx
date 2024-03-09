import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { SWRConfig } from "swr";

const fetcher = url => fetch(url).then(response => response.json())

export function Root() {
  return (
    <SWRConfig value={{fetcher}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  );
}

/*
'SWRConfig' è un provider di un contesto, che riceve un valore:
valore che sarà la configurazione iniziale, da utilizzare per le istanze SWR.

1. Creiamo una funzione 'fetcher'
2. La passiamo all'interno di un oggetto, come valore di 'SWRConfig', alla configurazione di SWR
3. Questo oggetto verrà utilizzato per ogni chiamata all'API

A questo punto, in questo caso, rimuoviamo la funzione 'fetcher',
inserita come secondo paramentro nell'useSWR, nel nostro hook personalizzato 'useGithubUser'.
*/