console.log("App.js is running");
const appInfo = {
  title: "Indecision",
  subtitle: "Choose very wisely, or not, I don't care",
  options: []
};

const checkForChoices = () => {
  if (appInfo.options && appInfo.options.length > 0) {
    return <ol>{renderChoiceList()}</ol>;
  }
};

const makeChoice = option => {
  console.log("Choosing", option);
};

const renderChoiceList = () => {
  return appInfo.options.map((option, index) => {
    const id = index + option;
    return (
      <li
        key={id}
        onClick={e => {
          e.preventDefault();
          makeChoice(option);
        }}
      >
        {option}
      </li>
    );
  });
};

const clearAll = event => {
  event.preventDefault();
  appInfo.options = [];
  renderMain();
};

const chooseRandom = () => {
  const randomNum = Math.random();
  console.log(randomNum);
};

const renderOptionsForm = () => {
  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  );
};

const renderClearAll = () => {
  return <button onClick={clearAll}>Clear All!</button>;
};

const renderRandomChoice = () => {
  return <button onClick={chooseRandom}>Choose For Me</button>
};

let shouldShow = false;
const renderToggleVisibility = () => {
  if (shouldShow) {
    return (
      <div>
        {renderClearAll()}
        {renderRandomChoice()}
        {renderOptionsForm()}
        {checkForChoices()}
        <button onClick={changeShow}>Hide Options</button>
      </div>
    );
  } else {
    return <button onClick={changeShow}>Show Options</button>
  }
};

const changeShow = () => {
  if (shouldShow) {
    shouldShow = false;
  } else {
    shouldShow = true;
  }
  renderMain();
};

const onFormSubmit = event => {
  event.preventDefault();
  const option = event.target.elements.option.value;
  if (option) {
    appInfo.options.push(option);
    event.target.elements.option.value = "";
    renderMain();
  }
};

const renderMain = () => {
  const choiceUi = (
    <div>
      <h1>{appInfo.title}</h1>
      {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
      {renderToggleVisibility()}
    </div>
  );
  ReactDOM.render(choiceUi, app);
};

const app = document.getElementById("app");
renderMain();
