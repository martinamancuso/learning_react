// Hook personalizzato (logica) usato all'interno della funzione (unità di presentazione)
// Hook agnostico rispetto al proprio contenuto/propria logica

import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [ counter, setCounter ] = useState(0);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  // Restituiamo un oggetto, contenente chiavi/proprietà a nostra scelta,
  // a cui assegnare i riferimenti alle funzioni scritte, per gestire gli eventi 'onClick' dei 'button'
  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}
