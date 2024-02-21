import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {console.log(count)}, [count])

  function incrementCount() {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  }

  return (
    <div>
      <CounterDisplay counterValue={count} />
      <button onClick={incrementCount}>Click to add a value!</button>
    </div>
  );
}