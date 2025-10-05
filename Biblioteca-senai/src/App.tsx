import { useState, type JSX } from "react";
import { Navbar } from "./components/Navbar";
import { ListaLivros } from "./components/ListaLivros";
import { Usuario } from "./components/Usuario";
import Cadastrar from "./components/Cadastrar";
import Emprestimos from "./components/Emprestimos";
import Relatorios from "./components/Relatorios";
import Configuracoes from "./components/Configuracoes";

export default function App() {
  const [page, setPage] = useState(1);
  const renderPage = (): JSX.Element => {
    switch (page) {
      case 1:
        return <ListaLivros />;
      case 2:
        return <Usuario />;
      case 3:
        return <Cadastrar />;
      case 4:
        return <Emprestimos />;
      case 5:
        return <Relatorios />;
      case 6:
        return <Configuracoes />;
      default:
        return <ListaLivros />;
    }
  };
  return (
    <>
      <header>
        <Navbar setPage={setPage} />
      </header>
      {renderPage()}
    </>
  );
}
