import AddTask from "./AddTask";
import Card from "./Card";
import { Link } from "react-router-dom";
import CardPopUp from "./CardPopUp";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Columns = ({ id, title }) => {
  const { tasks, selectedTask} = useContext(DataContext);

  // Filtrera tasks baserat på kolumnens id
  const filteredTasks = tasks.filter((task) => task.column === id);

  return (
    <section id="column">
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
        <div key={index} >
          <Card task={task} />
        </div>
      ))}
      {selectedTask && <CardPopUp />}
      {id === "todo" && (
        <div className="inputHolder">
          <AddTask />
        </div>
      )}
    </section>
  );
};

export default Columns;
