import { Card } from "./Components/Card";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container-fluid justify-content-center w-75 mt-5">
        <div className="row justify-content-start ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </>
  );
}

export default App;
