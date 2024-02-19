import { createRoot } from "react-dom/client"
import { Login } from "./Login";

function printData(loginData) {
  console.log(loginData);
}

createRoot(document.getElementById("root")).render(<Login onLogin={printData} />);