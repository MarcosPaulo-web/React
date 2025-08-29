import { useState } from "react";
import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Ler Livros",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Praticar Exercícios",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //Não precisa atualizar a tarefa

      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefa
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}
export default App;
