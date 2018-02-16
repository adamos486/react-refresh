"use strict";

console.log("App.js is running");

//only render the subtitle if exists. logical and
//create a brand new property: options, array of string options.

function clickOption(option) {
  console.log("Option clicked:", option);
}

var plusId = 100;
var minusId = 101;
var resetId = 102;
var count = 0;

var addOne = function addOne() {
  console.log("addOne()");
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  console.log("minusOne()");
  count--;
  renderCounterApp();
};

var reset = function reset() {
  console.log("reset");
  count = 0;
  renderCounterApp();
};

var app = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var counterTemplate = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { id: plusId, onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { id: minusId, className: "button", onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { id: resetId, className: "button", onClick: reset },
      "Reset"
    )
  );

  ReactDOM.render(counterTemplate, app);
};

renderCounterApp();
