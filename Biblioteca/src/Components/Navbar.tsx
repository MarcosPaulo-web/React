export function Navbar() {
  return (
    <header className="w-screen flex  items-center py-4 px-5 bg-slate-100 border-b-2 border-slate-300">
      <h1>Senai</h1>
      <ul className="flex w-full justify-center items-center justify-center space-x-8 ">
        <li>
          <button>Acervo Completo</button>
        </li>
        <li>
          <button>Livros</button>
        </li>
        <li>
          <button>Periódicos</button>
        </li>
        <li>
          <button>Outros Materiais</button>
        </li>
      </ul>
    </header>
  );
}
