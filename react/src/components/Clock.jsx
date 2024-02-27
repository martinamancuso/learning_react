import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext"

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const language = useContext(LanguageContext);
  const messages = {
    en: "Current time is: ",
    it: "L'ora corrente è: ",
  };

  return <div>{`${messages[language]}${time}`}</div>;

  // precedente: return <h2>{time.toLocaleTimeString()}</h2>
}
