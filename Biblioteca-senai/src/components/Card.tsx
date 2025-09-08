export function Card() {
  return (
    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4">
      {/* 2. Adicionei a classe "h-100" para garantir que o card preencha a altura do seu container de coluna */}
      <div className="card h-100 overflow-hidden border-1 border-primary bg-dark-subtle">
        {/* 3. Transformei o interior do card em uma "row" para dividir a imagem e o conteúdo */}
        <div className="row g-0 h-100">
          <div className="col-4">
            <img
              src="https://m.media-amazon.com/images/I/81Q+00hKJiL.jpg"
              alt="Capa do livro"
              className="img-fluid rounded-start h-100"
              style={{ objectFit: "cover" }} // Mantém a proporção da imagem sem distorcer
            />
          </div>

          <div className="col-8">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <div>
                <h5 className="card-title">Título</h5>
                <div className="mb-2">
                  <span className="badge bg-primary me-1">Livro</span>
                  <span className="badge bg-danger">Indisponível</span>
                </div>
                <a href="#" className="btn btn-link p-0 mb-2">
                  Saiba mais
                </a>
              </div>

              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-primary btn-sm">Reservar</button>
                <button className="btn btn-warning btn-sm">Editar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
