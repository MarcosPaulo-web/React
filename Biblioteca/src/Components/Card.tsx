export function Card() {
  return (
    <div className="space-x-2 flex size-50 w-fit border-blue-400 border-2 p-2 rounded-md">
      <img
        src="https://m.media-amazon.com/images/I/61Jux50srZL._SL1200_.jpg"
        alt="capa do livro"
        className="size-auto h-40"
      />
      <div className="space-y-3">
        <h1 className="text-xl">Titulo do livro</h1>

        <div className="space-x-2">
          <div className="bg-blue-700 rounded-md px-2 py-0.5 text-center text-slate-100 text-xs font-medium inline-block">
            Livro
          </div>
          <div className="bg-green-500 rounded-md px-2 py-0.5 text-center text-slate-100 text-xs font-medium inline-block">
            Disponivel
          </div>
        </div>
        <div>
          <a href="#" className="underline">
            saiba mais{" ->"}
          </a>
        </div>
        <div className="space-x-2">
          <button className=" bg-blue-700 px-1 py-1.5 rounded-md text-xs font-semibold text-slate-100">
            Reservar
          </button>
          <button className="bg-yellow-400 px-1 py-1.5 rounded-md text-xs font-semibold">
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}
