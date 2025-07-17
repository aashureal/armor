import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/main.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>
);
