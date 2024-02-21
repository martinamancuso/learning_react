// Esercizio #2
// Create a Login component containing three inputs: a username input, a password input and a remember checkbox.
// All three inputs should be controlled components.

//Esercizio #3
// Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty.
// When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, 
// passing it the state, that will print the state value.

import { useState } from "react";

export function Login({ onLogin }) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)

  function handleUsernameInput(event) {
    setUsername(event.target.value)
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value)
  }

  function handleCheckboxInput(event) {
    setRemember(event.target.checked)
  }

  function handleLogin(event) {
    event.preventDefault();
    onLogin({
      username: username,
      password: password,
      remember: remember
    })
  }

  function handleResetButton() {
    setUsername("");
    setPassword("");
    setRemember(false);
  }

  return (
    
    // In generale, quando in un form abbiamo un <button type="submit">, 
    // il form invia i dati al browser e cancella i valori dei campi <input>.
    // Per evitare questo comportamento di default, possiamo utilizzare metodo '.preventDefault()' sull'evento stesso (vedi riga 31).
    <form onSubmit={handleLogin}>
      <input type="text" name="username" value={username} onChange={handleUsernameInput}/>
      <input type="password" name="password" value={password} onChange={handlePasswordInput}/>
      <input type="checkbox" name="remember" checked={remember} value="yes" onChange={handleCheckboxInput}/>
      <button type="submit" disabled={!username || !password}>Login</button>
      <button onClick={handleResetButton}>Reset</button>

      {/* 
      Per stampare a video i valori delle variabili:
      <p>Username: {username}</p>
      <p>Password: {password}</p>
      <p>Remember: {String(remember)}</p> 
      */}
    </form>
  );
}