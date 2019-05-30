import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: "",
      errors: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    if (!this.state.todoValue) {
      this.setState({
        todoValue: "",
        errors: "Please enter a Todo"
      });
      return;
    }
    this.props.addTodo(this.state.todoValue);
    this.setState({
      todoValue: "",
      errors: ""
    });
  };

  render() {
    return (
      <div>
        {this.state.errors && <p>{this.state.errors}</p>}

        <form onSubmit={this.addTodo}>
          <input
            placeholder="Enter your todo"
            value={this.state.todoValue}
            onChange={this.handleChange}
            type="text"
            name="todoValue"
          />
          <div className="btnDiv">
            <button onClick={this.addTodo}>Add Todo</button>
            <button>Clear Completed</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
