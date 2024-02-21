import { createRoot } from "react-dom/client"
import { MyForm } from "./MyForm";

// function printData(loginData) {
//   console.log(loginData);
// }

// createRoot(document.getElementById("root")).render(<Login onLogin={printData} />);
createRoot(document.getElementById("root")).render(<MyForm />)