import React from "react";
import { useContext } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import DataContext from "./context/DataContext";

const Card = ({ task }) => {
  const { handleTaskClick, tasks, setTasks } = useContext(DataContext);

  //Hanterar förflyttning av tasken
  const handleMoveTask = (direction) => {
    if (!task) return;

    //Var tasksen ska
    const columnMapping = {
      forward: {
        todo: "doing",
        doing: "done",
      },
      backward: {
        done: "doing",
        doing: "todo",
      },
    };

    //Ger tasken sin nya kolumn
    const updatedTasks = tasks.map((prevtask) => {
      if (prevtask.id === task.id) {
        const nextColumn = columnMapping[direction][prevtask.column];
        return { ...prevtask, column: nextColumn || prevtask.column };
      }
      return prevtask;
    });

    //Sätter state och skickar till LS
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Stylar pilarna baserat på kolumnens id
  const isTodo = task.column === "todo";
  const isDone = task.column === "done";
  const arrowBackStyle = isTodo ? { color: "lightgray" } : { color: "black" };
  const arrowForwardStyle = isDone
    ? { color: "lightgray" }
    : { color: "black" };

  return (
    <div className="card" onClick={() => handleTaskClick(task.id)}>
      <IoIosArrowBack
        size={20}
        style={{ marginRight: "10px", ...arrowBackStyle }}
        onClick={(e) => {
          e.stopPropagation();
          handleMoveTask("backward");
        }}
      />
      <div className="cardHolder">
        <p className="taskCard">{task.title}</p>
        <p className="dateCard" style={{ fontSize: "12px", color: "gray" }}>
          {task.date}
        </p>
      </div>
      <IoIosArrowForward
        size={20}
        style={{ marginRight: "10px", ...arrowForwardStyle }}
        onClick={(e) => {
          e.stopPropagation();
          handleMoveTask("forward");
        }}
      />
    </div>
  );
};

export default Card;
