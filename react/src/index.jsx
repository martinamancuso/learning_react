import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);

// fetch("https://api.github.com/users/martinamancuso")
//   .then(response => {
//     console.log(`Response status: ${response.status}`)
//     return response.json()
//   })
//   .then(json => {
//     console.log(json)
//   })