// Obiettivo del componente: scaricare un file di dati da GitHub, contenente informazioni utente.

// E' necessario useEffect per effettuare la richiesta HTTP, ovvero il fetch dei dati.
// Appena i dati verranno restituiti dal server, li salveremo dentro una 'state variable' e li renderizzeremo nel componente, in pagina.

// Simulare una connessione lenta: Dev tools > Network > No throttling > Slow 3G > Disable cache flag

import { useEffect, useState } from "react";

export function GithubUserLesson({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGitHubUser(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();

      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGitHubUser(username)
  }, [username]);

   // a questo punto, la 'state variable' sarà stata popolata: potremo farla restituire dal componente, renderizzandola nell'interfaccia utente
   return <div>
   {/* useremo il 'rendering condizionale': per renderizzare un componente o un elemento, solo se una certa condizione è vera */
}
     {loading && <h1>Loading...</h1>}
     {error && <h1>There has been an error</h1>}
     {data && <h1>{data.name}</h1>}
   </div>;
}
//

/*
import { useEffect, useState } from "react";

export function GithubUserLesson({ username }) {

  const [data, setData] = useState(null);
  // per tenere traccia degli stati di caricamento, da mostrare all'utente, creo la rispettiva variabile
  const [loading, setLoading] = useState(false);

  // per tenere traccia degli errori, creo la rispettiva variabile
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    // imposto la variabile 'loading' a true, subito prima di effettuare il fetch dei dati
      setLoading(true)
    // attendo la risoluzione della Promise, restituendo poi l'oggetto 'response.json()'
      .then((response) => {
        if (response.status !== 200) {
          setError(new Error("User not found"))
        }
      return response.json();
    })
    // una volta ottenuto l'oggetto json, lo voglio salvare: creo una 'state variable', con useState(null)
      .then(json => {
        // non so che tipo di dati saranno, per cui meglio fare un console.log
        //console.log(json)

        // re-imposto la variabile 'loading' a false, subito dopo aver ricevuto risposta dal server
        // setLoading(false)

        // passo l'oggetto json alla funzione setData
        setData(json)
      })
      .catch(error => {
        setError(error)
      })
      // indipendentemente dal fatto che la risposta della Promise vada a buon fine o meno, re-imposto la variabile 'loading' a 'false'
      .finally(() => {
        setLoading(false)
      })
  }, [username]);

  // a questo punto, la 'state variable' sarà stata popolata: potremo farla restituire dal componente, renderizzandola nell'interfaccia utente
  return 
    <div>
      {/* useremo il 'rendering condizionale': per renderizzare un componente o un elemento, solo se una certa condizione è vera */
//       {loading && <h1>Loading...</h1>}
//       {error && <h1>There has been an error</h1>}
//       {data && <h1>{data.name}</h1>}
//    </div>;
// }