import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer exercícios",
      description: "Fazer exercícios para manter a saúde em dia.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler livros",
      description: "Ler livros para adquirir conhecimento.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    const deleteTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(deleteTasks);
  }

  function addTask(nomeTarefa, descricaoTarefa) {
    const newTask = {
      id: tasks.length + 1,
      title: nomeTarefa,
      description: descricaoTarefa,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-6">
        <h1 className="text-3xl text-slate-100 font-bold text-center mb-6">
          Gerenciador de Tarefas
        </h1>
        <AddTask addTask={addTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
