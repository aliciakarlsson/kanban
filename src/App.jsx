import Columns from "./Columns";
import { Routes, Route } from "react-router-dom";
import Board from "./Board";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Board />} />
      <Route path="/todo" element={<Columns id="todo" title="To do" />} />
      <Route path="/doing" element={<Columns id="doing" title="Doing" />} />
      <Route path="/done" element={<Columns id="done" title="Done" />} />
    </Routes>
  );
}

export default App;
