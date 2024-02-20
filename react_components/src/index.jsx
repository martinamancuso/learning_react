import { createRoot } from "react-dom/client"
import { UncontrolledLogin } from "./UncontrolledLogin";

// function printData(loginData) {
//   console.log(loginData);
// }

// createRoot(document.getElementById("root")).render(<Login onLogin={printData} />);
createRoot(document.getElementById("root")).render(<UncontrolledLogin />)