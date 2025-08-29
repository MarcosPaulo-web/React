import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="border rounded-md border-slate-300 outline-slate-400 px-4 py-2"
        type="text"
        placeholder="Digite o titulo da tarefa : "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border rounded-md border-slate-300 outline-slate-400 px-4 py-2"
        type="text"
        placeholder="Digite a descrição da tarefa : "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha todos os campos");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white rounded-md px-4 py-2 font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTask;
