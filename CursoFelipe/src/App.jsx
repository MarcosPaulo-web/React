import { useEffect, useState } from "react";
import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // executa a função sempre que um valor da lista for alterado
  /* 
  useEffect(() => {
    async function fetchTasks() {
      //chamar a API
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=10`,
        {
          method: "GET",
        }
      );
      //pegar os dados que ela retornar
      const data = await response.json();
      console.log(data);

      //armazenar/persistir os dados no state
      setTasks(data);
    }

    //fetchTasks(); vc pode chamhar em uma api tmb
  }, []); // executa a função apenas uma vez quando o componente for montado
 */
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

  function removeTask(taskId) {
    const newTasks = tasks.filter((task) => taskId != task.id);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title title="Gerenciador de  Tarefas" />
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
}
export default App;
