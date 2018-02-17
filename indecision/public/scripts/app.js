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
    console.log(index + option);
    return React.createElement(
      "li",
      {
        key: index + option,
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
    renderClearAll(),
    renderOptionsForm(),
    checkForChoices()
  );
  ReactDOM.render(choiceUi, app);
};

var app = document.getElementById("app");
renderMain();
