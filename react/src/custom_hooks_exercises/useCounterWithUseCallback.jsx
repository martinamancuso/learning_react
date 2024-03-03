import { useCallback, useState } from "react";

export function useCounterWithUseCallback(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((c) => c - 1);
  }, []);

  const reset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return {
    // Potrei lasciare solo le proprietà, dal momento che proprietà e valore hanno lo stesso nome
    counter: counter,
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
}