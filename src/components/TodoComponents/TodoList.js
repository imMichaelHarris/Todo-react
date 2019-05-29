// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  //Map over every todo that was passed in through props and return a Todo component
  // for each entry in the array
  return (
    <div>
      {props.todos.map((todo, i) => (
        <Todo todoProp={todo} key={i} />
      ))}
    </div>
  );
};

export default TodoList;
