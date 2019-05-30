import React from "react";

const Todo = props => {
    const removeTodo = (e) => console.log(e.target);
  return <li>{props.todo.task}<button onClick={removeTodo} className="close">X</button></li>;
};

export default Todo;
