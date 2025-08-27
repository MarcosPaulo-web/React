import "../css/menu.css"; // <-- Caminho relativo para a pasta styles

function Menu() {
  return (
    <div className="nav">
      <a href="/">Home</a>
      <a href="/sobre">Sobre</a>
      <a href="/contato">Contato</a>
    </div>
  );
}
export default Menu;
