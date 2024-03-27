/*
Crea un componente che gestisca un contatore:

- che aumenta ad ogni click dell'utente;
- con un effetto, che aggiorna il titolo della pagina, ogni volta che il valore del contatore cambia;
- che mostri un messaggio, che cambierà in base al valore del contatore, se pari o dispari.
*/

import React, { useState, useEffect } from "react";
import styles from './Counter.module.css';

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contatore: ${count}`;
  }, [count]);

  const getMessage = () => {
    if (count % 2 === 0) {
      return "Il contatore è pari!";
    } else {
      return "Il contatore è dispari!";
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.counterText}>Hai premuto il bottone {count} volte.</p>
      <button className={styles.button} onClick={() => setCount(count + 1)}>Incrementa contatore</button>
      <p className={styles.message}>{getMessage()}</p>
    </div>
  );
}