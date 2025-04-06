import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/details?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            className={`bg-slate-400 w-full text-white p-2 rounded text-left ${
              tasks.isCompleted ? "line-through" : ""
            }`}
            onClick={() => props.onTaskClick(tasks.id)}
          >
            {tasks.title}
          </button>
          <button
            className="bg-slate-400 p-2 rounded md text-white"
            onClick={() => onSeeDetailsClick(tasks)}
          >
            <ChevronRightIcon />
          </button>
          <button
            className="bg-slate-400 p-2 rounded md text-white"
            onClick={() => props.onTaskDelete(tasks.id)}
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
