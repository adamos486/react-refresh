import React from "react";

export default class AddOptionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(event) {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    console.log("Adding new option:", option);
    if (option) {
      event.target.elements.option.value = "";
      this.props.add(option);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption.bind(this)}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    );
  }
};