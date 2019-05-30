import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  toggleTodo = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    });
  };
  addTodo = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };

  clearCompleted = () => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(item => !item.completed)
      }
    })
  }

  render() {
    // TodoList is getting the array of todos from the state and passing that to the todolist component
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleTodo={this.toggleTodo} todos={this.state.todos} />
        <TodoForm clearCompleted={this.clearCompleted} addTodo={this.addTodo} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
