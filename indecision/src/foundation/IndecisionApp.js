import React from "react";
import OptionsListComponent from "../defining_choices/OptionsListComponent.js";
import AddOptionComponent from "../defining_choices/AddOptionComponent.js";
import RemoveOptionsComponent from "../defining_choices/RemoveOptionsComponent.js";
import HeaderComponent from "../foundation/HeaderComponent.js";

export default class IndecisionApp extends React.Component {
  // options: ["One", "Two"];
  constructor(props) {
    super(props);
    this.state = {
      options: ["Harry Potter", "Star Wars"],
      isVisible: true,
      title: "Indecision",
      subtitle: "I don't care about you."
    };
    this.addOption = this.addOption.bind(this);
    this.clearOptions = this.clearOptions.bind(this);
    this.toggleVisible = this.toggleVisible.bind(this);
    this.shouldShow = this.shouldShow.bind(this);
  }

  addOption(option) {
    this.setState(prevState => {
      let newOptions = prevState.options;
      newOptions.push(option);
      return {
        options: newOptions
      };
    });
  }

  clearOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  toggleVisible() {
    this.setState(prevState => {
      return {
        isVisible: !prevState.isVisible
      };
    });
  }

  shouldShow() {
    if (this.state.isVisible) {
      return (
        <div>
          <RemoveOptionsComponent
            options={this.state.options}
            clear={this.clearOptions}
            hasOptions={this.state.options.length > 0}
          />
          <AddOptionComponent options={this.state.options} add={this.addOption} />
          <OptionsListComponent options={this.state.options} />
          <button onClick={this.toggleVisible}>Hide</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisible}>Show</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <HeaderComponent title={this.state.title} subtitle={this.state.subtitle} />
        {this.shouldShow()}
      </div>
    );
  }
};