"use strict";

console.log("App.js is running");
var appInfo = {
  title: "Indecision",
  subtitle: "Choose very wisely, or not, I don't care",
  options: []
};

var checkForChoices = function checkForChoices() {
  if (appInfo.options && appInfo.options.length > 0) {
    return React.createElement(
      "ol",
      null,
      renderChoiceList()
    );
  }
};

var makeChoice = function makeChoice(option) {
  console.log("Choosing", option);
};

var renderChoiceList = function renderChoiceList() {
  return appInfo.options.map(function (option, index) {
    var id = index + option;
    return React.createElement(
      "li",
      {
        key: id,
        onClick: function onClick(e) {
          e.preventDefault();
          makeChoice(option);
        }
      },
      option
    );
  });
};

var clearAll = function clearAll(event) {
  event.preventDefault();
  appInfo.options = [];
  renderMain();
};

var chooseRandom = function chooseRandom() {
  var randomNum = Math.random();
  console.log(randomNum);
};

var renderOptionsForm = function renderOptionsForm() {
  return React.createElement(
    "form",
    { onSubmit: onFormSubmit },
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement(
      "button",
      null,
      "Add Option"
    )
  );
};

var renderClearAll = function renderClearAll() {
  return React.createElement(
    "button",
    { onClick: clearAll },
    "Clear All!"
  );
};

var renderRandomChoice = function renderRandomChoice() {
  return React.createElement(
    "button",
    { onClick: chooseRandom },
    "Choose For Me"
  );
};

var shouldShow = false;
var renderToggleVisibility = function renderToggleVisibility() {
  if (shouldShow) {
    return React.createElement(
      "div",
      null,
      renderClearAll(),
      renderRandomChoice(),
      renderOptionsForm(),
      checkForChoices(),
      React.createElement(
        "button",
        { onClick: changeShow },
        "Hide Options"
      )
    );
  } else {
    return React.createElement(
      "button",
      { onClick: changeShow },
      "Show Options"
    );
  }
};

var changeShow = function changeShow() {
  if (shouldShow) {
    shouldShow = false;
  } else {
    shouldShow = true;
  }
  renderMain();
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var option = event.target.elements.option.value;
  if (option) {
    appInfo.options.push(option);
    event.target.elements.option.value = "";
    renderMain();
  }
};

var renderMain = function renderMain() {
  var choiceUi = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      appInfo.title
    ),
    appInfo.subtitle && React.createElement(
      "p",
      null,
      appInfo.subtitle
    ),
    renderToggleVisibility()
  );
  ReactDOM.render(choiceUi, app);
};

var app = document.getElementById("app");
renderMain();
