export function Card() {
  return (
    <div className="col-10 col-md-6 col-lg-3 col-xxl-3">
      <div
        className="card bg-body mb-3 border-2 border-primary-subtle"
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0 h-100">
          <div className="col-md-4">
            <img
              src="https://m.media-amazon.com/images/I/51i8-f+QMFL._AC_UL320_.jpg"
              className="h-100 w-100 rounded-start object-fit-cover"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8 px-2 ">
            <div className="card-body">
              <h3 className="card-title text-truncate">title</h3>

              <div className="d-flex gap-1 flex-wrap">
                <span className="bg-primary badge">Livro</span>
                <span className="bg-success badge">Disponivel</span>
              </div>

              <button className="btn btn-link">Saiba mais</button>

              <div className="d-flex gap-2">
                <button className="btn btn-primary">Reservar</button>
                <button className="btn btn-warning">Editar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
