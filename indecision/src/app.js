import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

class ManipOptions extends React.Component {
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

class EnterOptions extends React.Component {
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
}

class Option extends React.Component {
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
}

class ListOptions extends React.Component {
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
}

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
          <ManipOptions
            options={this.state.options}
            clear={this.clearOptions}
            hasOptions={this.state.options.length > 0}
          />
          <EnterOptions options={this.state.options} add={this.addOption} />
          <ListOptions options={this.state.options} />
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
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        {this.shouldShow()}
      </div>
    );
  }
}