import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import "./css/index.css";

createRoot(document.getElementById("navbar")).render(
  <StrictMode>
    <Navbar></Navbar>
  </StrictMode>
);
