import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  handleChange = e => {
    this.setState(prevState => {
        // this.props.filterList(prevState.inputValue);
        console.log(e.target)
        return{
            [e.target.name]: e.target.value

        }
    });
  };

  render() {
    return (
      <input
        placeholder="search"
        value={this.state.inputValue}
        onChange={this.handleChange}
        type="text"
        name="inputValue"
      />
    );
  }
}

export default SearchBar;
