import React, { useState, useContext } from "react";
import DataContext from "./context/DataContext";

const AddTask = () => {
  const { handleNewTask } = useContext(DataContext);
  const [newTask, setNewTask] = useState("");

  //Skickar in tasken vid klick på enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newTask.length > 0) {
      handleNewTask(newTask);
      setNewTask("");
    }
  };

  //Skickar in task vid klick på plusset
  const handleClick = () => {
    if (newTask.length > 0) {
      handleNewTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        id="addTask"
        placeholder="Create new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button id="taskButton" onClick={handleClick} type="submit">
        +
      </button>
    </div>
  );
};

export default AddTask;
