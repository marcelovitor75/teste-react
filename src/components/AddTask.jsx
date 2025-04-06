function AddTask(props) {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Título da tarefa"
          className="p-2 rounded-md bg-white"
          id="title"
        />
        <input
          placeholder="Descrição da tarefa"
          className="p-2 rounded-md bg-white"
          id="description"
        ></input>
        <button
          type="button"
          className="bg-slate-500 p-2 rounded-md text-white font-medium"
          onClick={() => {
            if (
              document.getElementById("title").value.trim() === "" ||
              document.getElementById("description").value.trim() === ""
            ) {
              alert("Preencha todos os campos!");
              return;
            }
            props.addTask(
              document.getElementById("title").value,
              document.getElementById("description").value
            );
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
          }}
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default AddTask;
