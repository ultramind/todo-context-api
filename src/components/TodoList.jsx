import React, { useContext } from "react";
import TodoContext from "../context/todo-contex";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, deleteTodo, toggleTodo } = useContext(TodoContext);
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          completed={todo.completed}
          id={todo.id}
          text={todo.todo}
          onDeleteTodo={deleteTodo}
          onToggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
