import { useGitHubUser } from "./useGitHubUser"

export function HookGitHubUser({ username }) {

  // Chiamo l'hook, passandogli l'username che desidero scaricare, destrutturandolo con le proprietà che desidero estrarre
  const { data, error, loading, onFetchUser } = useGitHubUser(username)

  // Creo una funzione 'handle event' che, al clic del 'button', chiami la funzione 'onFetchUser'
  function handleGitHubUserData() {
    // A 'onFetchUser' passo come parametro 'username', che è il valore che voglio che venga scaricato
    onFetchUser(username)
  }

  return (
    <div>
      <button onClick={handleGitHubUserData}>Load user data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}