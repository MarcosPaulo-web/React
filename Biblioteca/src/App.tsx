import { useState } from "react";
import { Card } from "./Components/Card";
import { NavbarBiblioteca } from "./Components/NavbarBiblioteca";
import { ThemeInit } from "../.flowbite-react/init";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  function toggleTheme() {
    console.log("trocou");
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <ThemeInit />
      <div
        className={`bg-slate-100 w-screen min-h-screen max-h-full dark:bg-slate-500`}
      >
        <NavbarBiblioteca toggleTheme={toggleTheme}></NavbarBiblioteca>

        <main className="justify-center flex mt-10 ">
          <div
            className={`grid gap-3  grid-cols-1 xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2  `}
          >
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
