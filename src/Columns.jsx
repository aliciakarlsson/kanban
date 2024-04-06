import React, { useState } from "react";
import AddTask from "./AddTask";
import Card from "./Card";
import { Link } from "react-router-dom";
import CardPopUp from "./CardPopUp";
import { useEffect } from "react";


const Columns = ({ id, title }) => {
  console.log(id);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);


  //Funktion för att hantera skapningen av en ny uppgift
  const handleNewTask = (newTask) => {
    const today = new Date().toLocaleDateString(); //Dagens datum
    const setId = tasks.length ? Number(tasks[tasks.length - 1].id) + 1 : 1; //Göra id
    const newId = setId.toString(); //Gör id till string

    //Taskens objekt
    const createdTask = {
      id: newId,
      title: newTask,
      date: today,
      content: "",
      column: id, //Säger vilken kolumn den tillhör
    };

    //Hämtar från localstorage
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const allTasks = [...existingTasks, createdTask]; //Lägg till tasken i resterande

    setTasks(allTasks);

    localStorage.setItem("tasks", JSON.stringify(allTasks)); //Spara
  };

    //Hantera klick på task
    const handleTaskClick = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setSelectedTask(task);
    };

const handleMoveTask = (direction) => {
  if (!selectedTask) return;

  const updatedTasks = tasks.map((task) => {
    if (task.id === selectedTask.id) {
      // Uppdatera kolumnen baserat på riktningen
      switch (direction) {
        case "forward":
          return { ...task, column: "doing" }; // Flytta framåt till 'doing'
        case "backward":
          return { ...task, column: "todo" }; // Flytta bakåt till 'todo'
        default:
          return task;
      }
    }
    return task;
  });

  setTasks(updatedTasks);
  setSelectedTask(null);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};
  //Hanterar stängning av popup
  const handleClosePopup = () => {
    setSelectedTask();
  };

  //Spara beskrivning av task
  const handleSaveDescription = (description) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === selectedTask.id) {
        return { ...task, content: description }; //Uppdatera beskrivning av task
      }
      return task;
    });

    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  //Funktion för att hantera borttagning av task
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setSelectedTask(null);
  };

  //Hämtar tasks från localstorage
  useEffect(() => {
    const fetchTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(fetchTasks);
  }, [id]);

  console.log(tasks);
  const filteredTasks = tasks.filter((task) => task.column === id);

  return (
    <section
      id="column">
      <h2 className="headerColumn">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          id="linkColumn"
          to={`/${id}`}
        >
        {title}
        </Link>
      </h2>
      {filteredTasks.map((task, index) => (
        <div onClick={() => handleTaskClick(task.id)}>
          <Card handleMoveTask={handleMoveTask} taskColumn={task.column} key={index} task={task.title} date={task.date} />
        </div>
      ))}
      {selectedTask && (
        <CardPopUp
          task={selectedTask}
          onClose={handleClosePopup}
          onSave={handleSaveDescription}
          onDelete={() => handleDeleteTask(selectedTask.id)}
        />
      )}
      {id === "todo" && (
        <div className="inputHolder">
          <AddTask onAdd={handleNewTask} />
        </div>
      )}
    </section>
  );
};

export default Columns;
