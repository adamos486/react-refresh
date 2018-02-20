const appInfo = {
  title: "Indecision",
  subtitle: "Choose very wisely, or not, I don't care",
  options: ["Garfield", "Ghostbusters"]
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{appInfo.title}</h1>
        <h3>{appInfo.subtitle}</h3>
      </div>
    );
  }
}

class ManipOptions extends React.Component {
  clearAll() {
    appInfo.options = [];
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
  onFormSubmit(event) {
    event.preventDefault();
    const option = event.target.elements.option.value;
    console.log("Adding new option:", option);
    if (option) {
      appInfo.options.push(option);
      event.target.elements.option.value = "";
      masterRender();
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
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
        key={this.props.id}
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
    if (appInfo.options && appInfo.options.length > 0) {
      return <ol>{this.renderChoiceList()}</ol>;
    } else {
      return <div />;
    }
  }

  renderChoiceList() {
    return appInfo.options.map((option, index) => {
      const id = index + option;
      return <Option key={id} id={id} option={option} />;
    });
  }

  render() {
    return this.checkForChoices();
  }
}

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ManipOptions />
        <EnterOptions />
        <ListOptions />
      </div>
    );
  }
}

const masterRender = () => {
  ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
};
masterRender();
