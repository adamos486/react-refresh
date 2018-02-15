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

var otherTemplate = React.createElement(
  "div",
  null,
  getName(user.name),
  getAge(user.age),
  user.location && getLocation(user.location)
);

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
  otherTemplate
);

var app = document.getElementById("app");

ReactDOM.render(template, app);
