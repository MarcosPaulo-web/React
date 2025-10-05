import { Link } from "react-router-dom";

export default function Adm() {
  return (
    <>
      <h1>Adm page</h1>
      <Link to="/">
        <button className="btn btn-info"> Cliente page </button>
      </Link>
    </>
  );
}
