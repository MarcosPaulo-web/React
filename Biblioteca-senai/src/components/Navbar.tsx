import { useState } from "react";
import { BotaoDropdown } from "./BotaoDropdown";

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

          <div className="d-flex flex-row">
            <button className="btn btn-body" onClick={toggleTheme}>
              {tema === "dark" ? (
                <i className="bi bi-brightness-high-fill"></i>
              ) : (
                <i className="bi bi-moon-fill"></i>
              )}
            </button>
            <div className="dropdown nav-item">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Adm
              </button>
              <ul className="dropdown-menu dropdown-menu-end bg-primary-subtle">
                <BotaoDropdown text={"Usuarios"} />
                <BotaoDropdown text={"Cadastrar"} />
                <BotaoDropdown text={"Empréstimos"} />
                <BotaoDropdown text={"Relatórios"} />
                <BotaoDropdown text={"Configurações"} />
              </ul>
            </div>
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
                  <BotaoDropdown text={"Romance"} />
                  <BotaoDropdown text={"Ação"} />
                  <BotaoDropdown text={"Suspense"} />
                  <BotaoDropdown text={"Terror"} />
                  <BotaoDropdown text={"Comédia"} />
                  <BotaoDropdown text={"Ciencia"} />
                  <BotaoDropdown text={"Documentário"} />
                  <BotaoDropdown text={"infantil"} />
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
