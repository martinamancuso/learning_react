export function useCounter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((c) => c + 1);
  }

  function decrement() {
    setCounter((c) => c - 1);
  }

  function reset() {
    setCounter(0);
  }

  return {
    // Potrei lasciare solo le proprietà, dal momento che proprietà e valore hanno lo stesso nome
    counter: counter,
    increment: increment,
    decrement: decrement,
    reset: reset
  };
}
