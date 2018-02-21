import React from "react";
import Option from "./OptionComponent.js";

export default class OptionsListComponent extends React.Component {
  checkForChoices() {
    if (this.props.options && this.props.options.length > 0) {
      return <ol>{this.renderChoiceList()}</ol>;
    } else {
      return <div />;
    }
  }

  renderChoiceList() {
    return this.props.options.map((option, index) => {
      const id = index + option;
      return <Option key={id} option={option} />;
    });
  }

  render() {
    return this.checkForChoices();
  }
};