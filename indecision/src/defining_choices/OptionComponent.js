import React from "react";

export default class OptionComponent extends React.Component {
  makeChoice(option) {
    console.log("Choosing", option);
  }

  render() {
    return (
      <li
        onClick={e => {
          e.preventDefault();
          this.makeChoice(this.props.option);
        }}
      >
        {this.props.option}
      </li>
    );
  }
};