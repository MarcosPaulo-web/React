import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";

import Navbar from "./components/Navbar";



createRoot(document.getElementById("main")!).render(
  <StrictMode>
    <Home></Home>
  </StrictMode>
);
