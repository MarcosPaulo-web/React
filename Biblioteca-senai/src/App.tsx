import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container-xxl d-flex justify-content-center align-items-center">
        <div className="row gap-3 flex-wrap justify-content-start">
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
