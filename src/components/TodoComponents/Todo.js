import React from "react";

const Todo = props => {
  return (
    <li className={`${props.todo.completed ? "completed" : ""}`}>
      {props.todo.task}
      <button onClick={() => props.toggleTodo(props.todo.id)} className="close">
        X
      </button>
    </li>
  );
};

export default Todo;
