import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Link, useNavigate } from "react-router-dom";

export function Welcome() {
  // Consente di accedere a qualsiasi contesto passatogli come parametro
  const language = useContext(LanguageContext);

  // 'useNavigate' restuisce una 'funzione di navigazione'
  const navigate = useNavigate()

  // Passo alla funzione di navigazione il percorso verso il quale trasferirmi al clic del 'button'
  function handleLoginButtonClick() {
    navigate('/login')
  }

  return (
    <div>
      <h2>{language === "en" ? "Hello, World!" : "Ciao, Mondo!"}</h2>
      {/* <Link to="/login">Login to the app</Link> */}
      <div>
        <button onClick={handleLoginButtonClick}>Enter the app</button>
      </div>
    </div>
  );
  // precedente: return <h2 className="welcome">Welcome, {name}!</h2>
}

/*
NB

Il componente 'HelloWorld' non sta ricevendo la lingua come prop,
sta accedendo al valore del provider del contesto,
attraverso l'hook useContext().

useContext() 
riceve come parametro il contesto a cui si vuole accedere
ed estrae dal contesto il valore corrente.
*/
