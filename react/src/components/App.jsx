// import { LanguageContext } from "./LanguageContext";
// import { Clock } from "./Clock";
// import { useState } from "react";
// import { GitHubUser } from "./GitHubUser";
// import { useCounter } from "../custom_hooks_lessons/useCounter";
// import { HookCounter } from "../custom_hooks_lessons/HookCounter";
// import { HookGitHubUser } from "../custom_hooks_lessons/HookGitHubUser";
// import { CurrentLocation } from "./CurrentLocation";
// import { useRef, useState } from "react";
// import { FilteredList } from "./FilteredList";
import { Link, Route, Routes } from "react-router-dom";
import { Container } from "./Container";
import { Welcome } from "./Welcome";
import { Login } from "./Login";
import { Catalogue } from "./Catalogue";
import { Product } from "./Product";
import { GithubUsers2 } from "./GitHubUsers2";

export function App() {
  // const [ language, setLanguage ] = useState("en");
  // const { counter, onIncrement } = useCounter(0);
  // const [ username, setUsername ] = useState('')

  // const [citizens, setCitizens] = useState([
  //   { id: 1, name: "Mario", age: 32 },
  //   { id: 2, name: "Margherita", age: 24 },
  //   { id: 3, name: "Lucia", age: 42 },
  // ])

  // useRef utilizzato per salvare in memoria variabili che non cambieranno nel tempo
  // const friends = useRef([
  //   { id: 1, name: "Mario", age: 19 },
  //   { id: 2, name: "Margherita", age: 16 },
  //   { id: 3, name: "Lucia", age: 42 },
  // ])

  return (
    <Container
      title={
        <div>
          <h1>My Awesome App</h1>
          <div>
            <Link to="/">Home</Link> | <Link to="products">Products</Link> | <Link to="users">Users</Link>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="*"
          element={
            <div>
              <p>Not Found</p>
              <Link to="/">Go Home</Link>
            </div>
          }
        ></Route>
        <Route path="products" element={<Catalogue />}>
          <Route index element={<p>Please choose a product</p>} />
          <Route path=":id" element={<Product />} />
        </Route>
        {/* <Route path="/:name" element={<Welcome />} />
        <Route path="login" element={<Login />} /> */}
        <Route path="users" element={<GithubUsers2 />}></Route>
      </Routes>
      {/* <LanguageContext.Provider value={language}>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <Clock />
      </LanguageContext.Provider> */}
      {/* <GitHubUser username="martinamancuso" /> */}
      {/* <button onClick={onIncrement}>{counter}</button>
      <HookCounter /> */}
      {/* <input value={username} onChange={(e) => {setUsername(e.target.value)}} /> */}
      {/* <HookGitHubUser username="martinamancuso" /> */}
      {/* <CurrentLocation /> */}
      {/* <FilteredList people={friends.current} /> */}
    </Container>
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
