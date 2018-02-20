const appInfo = {
  title: "Indecision",
  subtitle: "Choose very wisely, or not, I don't care",
  options: ["Garfield", "Ghostbusters"]
};

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
    console.log(this.props.options);
    masterRender();
  }

  chooseRandom() {
    const randomNum = Math.random();
    console.log(randomNum);
  }

  renderRandomChoice() {
    return <button onClick={this.chooseRandom}>Choose For Me</button>;
  }

  renderClearAll() {
    return <button onClick={this.clearAll}>Clear All!</button>;
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
  handleAddOption(event) {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    console.log("Adding new option:", option);
    if (option) {
      this.props.options.push(option);
      event.target.elements.option.value = "";
      masterRender();
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

class IndecisionApp extends React.Component {
  // options: ["One", "Two"];

  render() {
    const title = "Indecision";
    const subtitle = "I don't care about you.";
    const options = ["Harry Potter", "Star Wars"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <ManipOptions options={options} />
        <EnterOptions options={options} />
        <ListOptions options={options} />
      </div>
    );
  }
}

const masterRender = () => {
  ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
};
masterRender();
