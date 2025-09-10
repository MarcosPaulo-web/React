import { useState } from "react";
import { BotaoDropDown } from "./BotaoDropdown";

export function Navbar() {
  const [tema, setTema] = useState<"light" | "dark">("dark");

  function toggleTheme() {
    const newTheme = tema === "light" ? "dark" : "light";
    setTema(newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  }

  return (
    <>
      <nav className="navbar bg-body">
        <div className="container-fluid">
          <a className="navbar-brand fs-2">Senai</a>

          <form className="d-flex w-25" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <div className="dropdown nav-item">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu bg-primary-subtle">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar bg-body navbar-expand-lg border-bottom border-2 border-secondary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Acervo Completo
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Livros
                </a>
                <ul className="dropdown-menu bg-primary-subtle">
                  <BotaoDropDown text={"Romance"} />
                  <BotaoDropDown text={"Ação"} />
                  <BotaoDropDown text={"Suspense"} />
                  <BotaoDropDown text={"Terror"} />
                  <BotaoDropDown text={"Comédia"} />
                  <BotaoDropDown text={"Ciencia"} />
                  <BotaoDropDown text={"Documentário"} />
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Periódicos
                </a>
                <ul className="dropdown-menu bg-primary-subtle">
                  <li onClick={toggleTheme}>
                    <button className="btn w-100 text-start">
                      Trocar tema
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Outros Materiais
                </a>
                <ul className="dropdown-menu bg-primary-subtle">
                  <li onClick={toggleTheme}>
                    <button className="btn w-100 text-start">
                      Trocar tema
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
