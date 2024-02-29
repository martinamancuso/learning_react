import { useState } from "react";

// Passiamo 'username' come parametro perché è il nome utente che desideriamo recuperare
export function useGitHubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGitHubUser(githubUser) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${githubUser}`
      );
      const data = await response.json();

      // Gestisco l'errore, nel caso in cui lo stato della risposta sia diverso da '200'
      // Imposto l'errore su un nuovo errore, senza specificare alcun messaggio

      // if (response.status !== 200) {
      //   setError(new Error());
      // }
      //   setData(data);
 
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  // Rimuovo questo 'useEffect',
  // in modo che i dati non vengano caricati automaticamente, non appena il nome utente cambia o il componente viene montato
  // piuttosto viene scaricato ogni volta che verrà chiamata la funzione 'onFetchUser: fetchGitHubUser'

  // useEffect(() => {
  //   fetchGitHubUser(username);
  // }, [username]);

  return { data, error, loading, onFetchUser: fetchGitHubUser };
}
