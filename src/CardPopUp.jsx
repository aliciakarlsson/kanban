import React, { useState } from "react";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const CardPopUp = () => {
  const { selectedTask, handleClosePopup, handleSaveDescription, handleDeleteTask } =
    useContext(DataContext);

  const [description, setDescription] = useState(selectedTask.content);

  const handleChange = (e) => {
    setDescription(e.target.value);
    handleSaveDescription(e.target.value);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h4>{selectedTask.column}</h4>
        <button id="closeButton" onClick={handleClosePopup}>
          X
        </button>
        <h3>{selectedTask.title}</h3>
        <textarea value={description} onChange={handleChange}></textarea>
        <button onClick={() => handleDeleteTask(selectedTask.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardPopUp;
