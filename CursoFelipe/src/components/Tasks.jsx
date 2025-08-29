import { Check, ChevronRight, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Buttom";

function Tasks({ tasks, onTaskClick, removeTask }) {
  const navigate = useNavigate();

  function onSeeDetails(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`text-left w-full bg-slate-400 text-white p-2 rounded-md
              ${task.isCompleted && "line-through"}`}
          >
            <Check
              className={`mr-2 transition-opacity duration-200 ${
                task.isCompleted ? "opacity-100" : "opacity-0"
              }`}
            />
            {task.title}
          </button>
          <Button
            onClick={() => {
              onSeeDetails(task);
            }}
          >
            <ChevronRight />
          </Button>
          <Button
            onClick={() => {
              removeTask(task.id);
            }}
          >
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  );
  //&& serve para add a classe se a condição for true
}
export default Tasks;
