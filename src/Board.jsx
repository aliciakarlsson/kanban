import React, { useState } from "react";
import Columns from "./Columns";

const Board = () => {
    const [columns, setColumns] = useState([
      {
        id: 'todo',
        title: "To Do",
      },
      {
        id: 'doing',
        title: "Doing",
      },
      {
        id: 'done',
        title: "Done",
      },
    ]);


  return (
    <main>
        {columns.map((column, index) => (
            <Columns key={index} id={column.id} title={column.title}/>
        ))}
    </main>
  );
};

export default Board;
