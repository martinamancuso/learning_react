import { useEffect, useState, useRef } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function CounterRef() {
  const [count, setCount] = useState(0);

  const prevCount = useRef(0);
  const direction = useRef(null);

  useEffect(() => {
    if (count > prevCount.current) {
      direction.current = "up";
      console.log("direction", direction.current);
    } else if (count < prevCount.current) {
      direction.current = "down";
      console.log("direction", direction.current);
    }

    prevCount.current = count;
  }, [count])

  function incrementCount() {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  }

  function decrementCount() {
    setCount((currentCount) => {
      return currentCount - 1;
    });
  }

  return (
    <div>
      <CounterDisplay counterValue={count} />
      <button onClick={incrementCount}>Click to increment!</button>
      <button onClick={decrementCount}>Click to decrement!</button>
    </div>
  );
}