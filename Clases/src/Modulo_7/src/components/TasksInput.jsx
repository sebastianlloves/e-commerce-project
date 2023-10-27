import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask, deleteTask } from "../features/tasksSlice";

const TasksInput = () => {
  const [taskContent, setTaskContent] = useState("");
  const [taskId, setTaskId] = useState("");
  const dispatch = useDispatch()

  return (
    <div className="flex w-1/3 flex-col space-y-4 bg-white p-10">
      <h1>Tareas</h1>
      <form>
        <h2>Cargar nueva tarea:</h2>
        <input
          type="text"
          name="taskContent"
          value={taskContent}
          className="border-2 border-gray-400 bg-white"
          onChange={(e) => setTaskContent(e.target.value)}
        />
        <button
          disabled={taskContent === ""}
          type="submit"
          className="m-3 bg-white p-3 text-black disabled:bg-slate-400"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addNewTask(taskContent));
            setTaskContent("");
          }}
        >
          CARGAR
        </button>

        <h2>Borrar Tarea</h2>
        <input
          type="text"
          name="taskId"
          value={taskId}
          className="border-2 border-gray-400 bg-white"
          onChange={(e) => setTaskId(e.target.value)}
        />
        <button
          disabled={taskId === ""}
          type="submit"
          className="m-3 bg-white p-3 text-black disabled:bg-slate-400"
          onClick={(e) => {
            e.preventDefault();
            dispatch(deleteTask(taskId));
            setTaskId("");
          }}
        >
          BORRAR
        </button>
      </form>
    </div>
  );
};

export default TasksInput;
