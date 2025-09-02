import { Navbar } from "./Components/Navbar";
import { Card } from "./Components/Card";

function App() {
  return (
    <div className="bg-slate-100 w-screen min-h-screen max-h-full   ">
      <Navbar></Navbar>

      <main className="justify-center flex mt-10 ">
        <div className=" grid gap-3  grid-cols-1 xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2  ">
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
