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
  // a cui assegnare i riferimenti alle funzioni scritte
  
  // Dall'esterno, accediamo alle funzioni attraverso le proprietà dell'oggetto,
  // le proprietà poi 'chiameranno' le relative funzioni
  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}
