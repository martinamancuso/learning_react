import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function Welcome() {
  // Consente di accedere a qualsiasi contesto passatogli come parametro
  const language = useContext(LanguageContext)

  return <h2>{language === "en" ? 'Hello, World!' : 'Ciao, Mondo!'}</h2>
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