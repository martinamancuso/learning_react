import { createRoot } from "react-dom/client";
import "./index.css";
import { Root } from "./components/Root";

createRoot(document.getElementById("root")).render(<Root />);

// fetch("https://api.github.com/users/martinamancuso")
//   .then(response => {
//     console.log(`Response status: ${response.status}`)
//     return response.json()
//   })
//   .then(json => {
//     console.log(json)
//   })