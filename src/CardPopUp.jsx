import React, { useState } from "react";

const CardPopUp = ({ task, onClose, onSave, onDelete }) => {
  const [description, setDescription] = useState(task.content);

  const handleChange = (e) => {
    setDescription(e.target.value);
    onSave(e.target.value);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <button id="closeButton" onClick={onClose}>
          X
        </button>
        <h3>{task.title}</h3>
        <textarea value={description} onChange={handleChange}></textarea>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default CardPopUp;
