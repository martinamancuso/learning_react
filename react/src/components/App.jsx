// import { LanguageContext } from "./LanguageContext";
// import { Clock } from "./Clock";
// import { useState } from "react";
// import { GitHubUser } from "./GitHubUser";
import { useCounter } from "../custom_hooks_lessons/useCounter";
import { HookCounter } from "../custom_hooks_lessons/HookCounter";
import { HookGitHubUser } from "../custom_hooks_lessons/HookGitHubUser";

export function App() {
  // const [ language, setLanguage ] = useState("en");
  const { counter, onIncrement } = useCounter(0);
  // const [ username, setUsername ] = useState('')

  return (
    <div>
      {/* <LanguageContext.Provider value={language}>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <Clock />
      </LanguageContext.Provider> */}
      {/* <GitHubUser username="martinamancuso" /> */}
      <button onClick={onIncrement}>{counter}</button>
      <HookCounter />
      {/* <input value={username} onChange={(e) => {setUsername(e.target.value)}} /> */}
      <HookGitHubUser username="martinamancuso" />
    </div>
  );
}

/*
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./Welcome";
import { TodoList } from "./TodoList";
import { useState } from "react";

// Inserendo dei componenti all'interno di 'LanguageContext.Provider',
// ognuno di loro diventerà discendente di 'LanguageContext.Provider'.

// Per 'LanguageContext.Provider' dovremo sempre specificare una prop 'value':
// sarà il valore reso disponibile per tutti i componenti figli / discendenti del provider
export function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <div>
      // funzioni inline che chiamano un'altra funzione, che impostano il valore della variabile di stato
      <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button>
      <Container title={<h1>My Container Component</h1>}>
        <LanguageContext.Provider value={language}>
          <Welcome name="Martina" />
          <TodoList />
        </LanguageContext.Provider>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          asperiores expedita iste. Porro similique, quae, deleniti inventore
          asperiores ipsam incidunt distinctio iure perspiciatis voluptatum
          ipsum impedit facilis dolor neque harum.
        </p>
      </Container>
    </div>
  );
}
*/

/* 
import { ContainerLesson } from "./ContainerLesson";
import { Welcome } from "./Welcome";
import { TodoList } from "./TodoList";

export function App() {
  return (
    <ContainerLesson title={<h1>My Container Component</h1>}>
      <h1>My Awesome Application</h1>
      <hr />
      <Welcome name="Martina" />
      <TodoList />
    </ContainerLesson>
  );
}
*/

{
  /* <Colors
        colors={[
          {
            id: 1,
            name: "pink",
          },
          {
            id: 2,
            name: "green",
          },
          {
            id: 3,
            name: "violet",
          },
        ]}
      />
    </div> */
}
