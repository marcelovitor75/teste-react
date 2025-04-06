import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function Details() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-6">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 bg-slate-400 p-2 rounded md text-white mr-4"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
          <p className="text-slate-500 font-bold text-left">
            <span className="text-slate-500 text-2xl">{title}</span>
          </p>
          <p className="text-slate-500 font-bold text-left">
            <span className="text-slate-600 text-1xl">{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
