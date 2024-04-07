import Columns from "./Columns";
import { useContext } from "react";
import DataContext from "./context/DataContext";


const Board = () => {
  const { columns } = useContext(DataContext);

  return (
    <main>
      {columns.map((column, index) => (
        //Skickar in de tre kolumnerna med hjälp av context
        <Columns key={index} id={column.id} title={column.title} />
      ))}
    </main>
  );
};

export default Board;


