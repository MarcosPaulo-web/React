import { Navbar } from "./Components/Navbar";
import { Card } from "./Components/Card";

function App() {
  return (
    <div className="bg-slate-200 w-screen h-full ">
      <Navbar></Navbar>

      <main className="flex justify-center w-full">
        <div
          className="justify-start mt-5 flex flex-wrap gap-7 md:gap-3 sm:gap-1 
        "
        >
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </main>
    </div>
  );
}

export default App;
