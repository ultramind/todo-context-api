import React, { useState, useContext } from "react";
import TodoContext from "../context/todo-contex";


const TodoInput = () => {
    const [input, setInput] = useState("");
    const {addTodo} = useContext(TodoContext);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      todo: input,
      completed: false
    }

    // adding todo
    addTodo(newTodo);
    setInput("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
