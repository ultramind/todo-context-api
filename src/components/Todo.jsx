import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";

const Todo = ({ id, text, completed, onDeleteTodo, onToggleTodo }) => {
  return (
    <li>
      {completed ? (
        <CheckBoxOutlinedIcon onClick={() => onToggleTodo(id)} />
      ) : (
        <CancelPresentationOutlinedIcon onClick={() => onToggleTodo(id)} />
      )}

      <span className="text" style={{ textDecoration: completed && 'line-through' }}>{text}</span>
      <DeleteForeverIcon className="delete" onClick={() => onDeleteTodo(id)} />
    </li>
  );
};

export default Todo;
