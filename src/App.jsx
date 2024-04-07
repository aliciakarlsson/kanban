import React from "react";
import { Routes, Route } from "react-router-dom";
import Board from "./Board";
import { DataProvider } from "./context/DataContext";
import ColumnPage from "./ColumnPage";

function App() {
  
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/:columnId" element={<ColumnPage />} />
      </Routes>
    </DataProvider>
  );
}

export default App;

