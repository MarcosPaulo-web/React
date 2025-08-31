import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart.tsx";
import { Catalogo } from "./components/Catalogo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Catalogo" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
