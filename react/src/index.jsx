import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { MyComponent } from "./MyComponent";

// function printData(loginData) {
//   console.log(loginData);
// }

// createRoot(document.getElementById("root")).render(<Login onLogin={printData} />);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyComponent />
  </StrictMode>
);