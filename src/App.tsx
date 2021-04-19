import React from "react";
import { TodosProvider } from "./context/todo";
import TodoConsumer from "./components/TodoConsumer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <TodoConsumer />
      </TodosProvider>
    </div>
  );
}

export default App;
