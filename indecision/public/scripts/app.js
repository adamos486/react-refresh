"use strict";

console.log("App.js is running");

var user = {
  name: "Adam Cobb",
  age: 30,
  location: "San Francisco"
};

//only render the subtitle if exists. logical and
//create a brand new property: options, array of string options.

var displayChunk = {
  title: "Some annoying title",
  subTitle: "Some annoying other title",
  options: ["Properties", "Sales", "Escrow", "Underwriting"]
};

function populateOptions(options) {
  return options.map(function (option) {
    return React.createElement(
      "li",
      {
        style: {
          cursor: "pointer"
        },
        key: option,
        onClick: function onClick(e) {
          e.preventDefault();
          clickOption(option);
        }
      },
      option
    );
  });
}

function clickOption(option) {
  console.log("Option clicked:", option);
}

function checkForOptions(options) {
  if (options && options.length > 0) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h4",
        null,
        "Here are your options:"
      ),
      React.createElement(
        "ul",
        null,
        populateOptions(options)
      )
    );
  }
}

function checkSubtitle(subtitle) {
  if (subtitle && subtitle.length > 0) {
    return React.createElement(
      "p",
      null,
      subtitle
    );
  }
}

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

function getName(name) {
  if (name) {
    return React.createElement(
      "h1",
      null,
      name
    );
  }
}

function getAge(age) {
  if (age) {
    return React.createElement(
      "p",
      null,
      "Age: ",
      age
    );
  }
}

var plusId = 100;
var minusId = 101;
var resetId = 102;
var count = 0;

var addOne = function addOne() {
  console.log("addOne()");
  count++;
};

var minusOne = function minusOne() {
  console.log("minusOne()");
  count--;
};

var reset = function reset() {
  console.log("reset");
  count = 0;
};

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
console.log(counterTemplate);

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    displayChunk.title
  ),
  checkSubtitle(displayChunk.subTitle),
  checkForOptions(displayChunk.options),
  counterTemplate
);

var app = document.getElementById("app");

ReactDOM.render(template, app);
