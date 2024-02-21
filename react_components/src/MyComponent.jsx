import { useEffect, useRef } from "react";

export function MyComponent() {
  const pRef = useRef(false);

  useEffect(() => {
    if (!pRef.current) {
      pRef.current = true;
      console.log("First render");
    }
  }, []);

  return <p>My Component</p>;
}