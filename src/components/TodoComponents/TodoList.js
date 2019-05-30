// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  //Map over every todo that was passed in through props and return a Todo component
  // for each entry in the array
  return (
    <div>
      <ul>
        {props.todos.map((todo, i) => (
          <Todo toggleTodo={props.toggleTodo} todo={todo} removeTodo={props.removeTodo} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
