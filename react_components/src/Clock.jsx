import { useEffect, useState } from "react"

export function Clock() {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(id)
    }
  }, [])

  return <h2>{time.toLocaleTimeString()}</h2>
}