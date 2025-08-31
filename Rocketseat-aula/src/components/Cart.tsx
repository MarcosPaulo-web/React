import { useNavigate } from "react-router-dom";

export function Cart() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>CART</h1>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}
