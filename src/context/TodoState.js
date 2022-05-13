import React, { useReducer } from "react";
import TodoContext from "./todo-contex";
import todoReducer from "./todo-reducer";

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./todo-actions";

const TodoState = ({ children }) => {
  const initialState = {
    todos: [
      {
        id: '935535',
        todo: 'Learning React',
        completed: true
      }
    ],
    title: "My TODO APP",
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Functionsnpm start


  // Add Todos
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo
    });
  };

  // Delete Todo
  const deleteTodo = (todoId) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoId
    });
  };

  // Toggle todo
  const toggleTodo = (todoId) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoId
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        title: state.title,
        addTodo,
        deleteTodo,
        toggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
