export function Card() {
  return (
    <div className="col-10 col-md-6 col-lg-3 col-xxl-3">
      <div
        className="card bg-body mb-3 border-1 border-primary-subtle"
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzYreV7S_aeOd3NXcaX8vZPQHdQ-Sy3jLeTnkDlLSEvKcAuw-MgJH0bNE92I89HqW1-P1Kiw1IUVUe2yBl7AmIePKptnrwqhYEvhHLrYaP"
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8 px-2">
            <div className="card-body">
              <h3 className="card-title text-truncate">title</h3>
              <div className="d-flex gap-1 flex-wrap">
                <span className="bg-primary badge">Livro</span>
                <span className="bg-success badge">Disponivel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
