import { useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function GitHubUsers() {
  const [name, setName] = useState("");
  const [userList, setUserList] = useState([]);

  function handleInputUsername(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    // Prevengo il comportamento di default del browser di refresh automatico della pagina, post invio dati del form
    event.preventDefault();
    // Controllo che il nome utente non sia vuoto
    if (name) {
      // Aggiungo l'input all'elenco di utenti, mantenendo immutato l'elenco esistente (principio di immutabilità in React)      
      setUserList((prevUserList) => [...prevUserList, name]);
      // Reimposto il campo di input a stringa vuota
      setName("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInputUsername}
          value={name}
          placeholder="Search GitHub User"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {/* 
        'user' come valore di 'key', 
        per fare in modo che ogni elemento <li> abbia una chiave unica basata sullo 'username', 
        che si assume essere unico per ogni utente GitHub (al contrario dell'indice, che potrebbe variare nel tempo).
        */}
        {userList.map((user) => (
          <li key={user}>
            <GitHubUser username={user} />
          </li>
        ))}
      </ul>
    </>
  );
}
