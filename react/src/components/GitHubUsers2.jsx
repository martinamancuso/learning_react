import {useGitHubUsers2} from "../custom_hooks_exercises/useGitHubUsers2"

export function GithubUsers2() {

  const { users, error, isLoading} = useGitHubUsers2()

  return (
    <div>
      {/* {!data && !error && <h3>Loading...</h3>} */}
      {isLoading && !error && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/*
Chiamo useSWR, passando due parametri: URL e funzione fetch
- URL che voglio interrogare, da cui recuperare i dati;
- Funzione fetch, per determinare come recuperare i dati dal server;
  
La chiamata useSWR restituirà un oggetto, da cui estrarrò:
- 'data'
- 'error'
ma non è detto che siano popolati, potrebbero essere 'vuoti'

E' necessario usare un conditional rendering per vagliare le varie situazioni:
- se non abbiamo dati e non abbiamo errori, stiamo caricando le informazioni
- se abbiamo un errore, renderizziamo 'c'è stato un errore'
- se abbiamo i dati e non abbiamo errori, renderizziamo l'array mappandolo con il 'map'

Passiamo la key={user.login} al tag 'li', 
in quanto sappiamo che in GitHub, ogni utente ha un nome utente è univoco.
(Vedi 'useGitHubUsers2.jsx')
*/