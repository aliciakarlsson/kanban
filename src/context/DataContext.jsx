import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

//Skapar providern
export const DataProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [columns, setColumns] = useState([
    {
      id: "todo",
      title: "To Do",
    },
    {
      id: "doing",
      title: "Doing",
    },
    {
      id: "done",
      title: "Done",
    },
  ]);

  //Hämtar alla tasks
    useEffect(() => {
      const fetchTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(fetchTasks);
    }, []);

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
      column: "todo", 
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

  return (
    <DataContext.Provider
      value={{
        columns,
        handleNewTask,
        tasks,
        setTasks,
        selectedTask,
        handleTaskClick,
        handleClosePopup,
        handleDeleteTask,
        handleSaveDescription,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
