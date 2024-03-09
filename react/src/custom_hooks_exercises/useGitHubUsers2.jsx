import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGitHubUsers2() {

  const { data, error, mutate } = useSWR(`https://api.github.com/users`)
  // Precedente: const { data, error, mutate } = useSWR(`https://api.github.com/users`, fetcher);

  // Gestire opzioni di 'useSWR':
  /* Posso passare un secondo parametro a 'useSWR', un oggetto, contenente proprietà 'pre-built':
  {
    refreshInterval,         > impostare un valore di intervallo in ms, per aggiornare i dati ad intervalli regolari
    refreshWhenHidden,       > aggiornare i dati, quando il browser utente è nascosto
    revalidateOnFocus: true  > riconvalidare i dati ogni, volta che il browser utente torna attivo (se 'false', ciò non accadrà)
  });
  */

  // Creo questa nuova funzione per effettuare una nuova richiesta di recupero dati dall'API GitHub
  // Questi nuovi dati li troverò all'interno dell'oggetto 'data'
  function handleRefreshUsers() {
    mutate()
  }

  // Restituisco un oggetto, con proprietà da me scelte, a cui assegno i valori che ho già e che mi serviranno
  // Gli hook personalizzati restituiscono sempre un oggetto
  return {
    users: data,
    error: error,
    isLoading: !data && !error,
    onRefresh: handleRefreshUsers
  }
}

/*
Alla riga 7:
Estraggo 'data', 'error' e 'mutate' da 'useSWR':

'Mutate' è la funzione di aggiornamento, 
che può essere chiamata in qualsiasi momento,
per attivare un nuovo recupero dei dati,
utilizzando SWR.
*/