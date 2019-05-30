import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  handleChange = e => {
    this.setState({
        // this.props.filterList(prevState.inputValue);
            [e.target.name]: e.target.value
    });
    this.props.filterList(e.target.value);
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
