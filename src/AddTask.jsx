import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [newTask, setNewTask] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newTask.length > 0) {
      onAdd(newTask);
      setNewTask("");
    }
  };

  const handleClick = () => {
    if (newTask.length > 0) {
      onAdd(newTask);
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
