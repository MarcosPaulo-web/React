import { useNavigate } from "react-router-dom";

export function Catalogo() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Catalogo</h1>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}
