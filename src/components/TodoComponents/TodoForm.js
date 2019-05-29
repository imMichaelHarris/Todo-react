import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: ""
    };
    console.log(this.state);
  }
  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  };

//   addTodo = e => {
//     e.preventDefault();
//     if (this.state.inputValue !== "") {   //Only set state if the input value is not empty
//       this.setState({
//         todos: [...this.state.todos, this.state.inputValue]
//       });
//     }

//     console.log(this.state);
//   };

  render() {
    return (
      <form onSubmit={this.props.addTodo}>
        <input
          placeholder="Enter your todo"
          value={this.state.inputValue}
          onChange={this.handleChange}
          type="text"
          name="todoValue"
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

// const TodoForm = (props) => {
//     return (
//         <form onSubmit={props.addTodo}>
//             <input 
//             placeholder = "Enter your todo"
//             value = "" />
//             <button>Add Todo</button>
//             <button>Clear</button>
//         </form>
//     )
// }
export default TodoForm;
