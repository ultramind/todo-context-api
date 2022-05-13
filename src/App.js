import React, { useContext } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import TodoState from "./context/TodoState";
import TodoContext from "./context/todo-contex";

function App() {
  //const { title } = useContext(TodoContext);
  return (
    <TodoState>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>

        <TodoInput />
        <div>
          <TodoList />
        </div>
      </div>
    </TodoState>
  );
}

export default App;
