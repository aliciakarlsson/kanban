import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Card = ({ task, date, handleMoveTask, taskColumn }) => {

  return (
    <div className="card" id={task.id} column={task.column}>
      <IoIosArrowBack
        size={20}
        color="black"
        style={{ marginRight: "10px" }}
        onClick={(e) => {
          e.stopPropagation();
          console.log("Moving task backward...");
          handleMoveTask("backward");
        console.log(taskColumn)}}
      />
      <div className="cardHolder" >
        <p className="taskCard">{task}</p>
        <p className="dateCard" style={{ fontSize: "12px", color: "gray" }}>
          {date}
        </p>
      </div>
      <IoIosArrowForward
        size={20}
        color="black"
        style={{ marginRight: "10px" }}
        onClick={(e) => {
          e.stopPropagation();
          console.log("Moving task forward...");
          handleMoveTask("forward");
        }}
      />
    </div>
  );
};

export default Card;
