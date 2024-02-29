// Hook personalizzato (logica) usato all'interno della funzione (unità di presentazione)
// Hook agnostico rispetto al proprio contenuto/propria logica

import { useCounter } from "../custom_hooks/useCounter";

export function HookCounter({ initialValue = 0 }) {
  // L'hook restituiva un oggetto, per cui si farà una destrutturazione dell'oggetto, per estrarne i valori
  const { counter, onIncrement, onReset } = useCounter(initialValue);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
