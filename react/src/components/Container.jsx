import { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapsed(event) {
    event.preventDefault();
    /* 
      i metodi set* accettano come valore:
      - il valore che vogliamo impostare (es. false)
      - oppure una funzione che deve restituire il valore che vogliamo
        impostare. Questa soluzione viene usata nel caso in cui vogliamo
        impostare un valore, in base al valore corrente della
        variabile. La funzione passata avrà come primo argomento
        il valore corrente della variabile.
    */
    setCollapsed((oldValue) => !oldValue)
  }

  const MyStyle = {
    backgroundColor: 'white',
    border: "1px solid red"
  }

  return (
    <div style={MyStyle}>
      <a href="#" onClick={handleCollapsed}>
        {title}
      </a>

      <div style={{ display: collapsed ? "none" : "block" }}>
        {children}
      </div>
    </div>
  );
}