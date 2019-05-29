import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos,
      inputValue: '',
    };
    console.log(this.state)
  }
  handleChange = e => {
      this.setState({
          inputValue: e.target.value
      })
  };

  addTodo = (e) => {
      e.preventDefault();
      this.setState({
        todos: [...this.state.todos, this.state.inputValue]
      })
      console.log(this.state)
  };
  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input placeholder="Enter your todo" value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.addTodo}>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
