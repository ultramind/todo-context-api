import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
// import TodoState from "../context/TodoState";

function App() {
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <TodoInput />
        <div>
          <ul>
            <TodoItem />
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
