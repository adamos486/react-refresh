import React from "react";

export default class RemoveOptionsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.clearAll = this.clearAll.bind(this);
  }

  clearAll() {
    this.props.clear();
  }

  chooseRandom() {
    const randomNum = Math.random();
    console.log(randomNum);
  }

  renderRandomChoice() {
    return (
      <button onClick={this.chooseRandom} disabled={!this.props.hasOptions}>
        Choose For Me
      </button>
    );
  }

  renderClearAll() {
    return (
      <button onClick={this.clearAll} disabled={!this.props.hasOptions}>
        Clear All!
      </button>
    );
  }

  render() {
    return (
      <div>
        {this.renderClearAll()}
        {this.renderRandomChoice()}
      </div>
    );
  }
}