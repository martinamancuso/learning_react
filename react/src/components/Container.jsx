import { useState } from "react";

export function Container({ title, children }) {

  // Container 'comprimibile': il contenitore può mostrare o nascondere il suo contenuto, a seconda del valore di una variabile di stato
  const [collapsed, setCollapsed] = useState(false);

  // Implemento il gestore di eventi "handleToggleCollapse"
  function handleToggleCollpase() {
    // Imposto il valore della variabile di stato, negando il suo valore corrente: se è 'false', mi restituirà 'true' e viceversa
    setCollapsed((t) => !t);
  }

  return (
    <div className="app">
      <div className="app-title">
        {title} <button onClick={handleToggleCollpase}>Toggle</button>
      </div>
      {/* {!collapsed && <div className="app-content">{children}</div>} */}
      <div className={!collapsed ? 'app-content' : 'app-content-hidden'}>{children}</div>
    </div>
  );
}
