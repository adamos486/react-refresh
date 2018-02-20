"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appInfo = {
  title: "Indecision",
  subtitle: "Choose very wisely, or not, I don't care",
  options: ["Garfield", "Ghostbusters"]
};

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          appInfo.title
        ),
        React.createElement(
          "h3",
          null,
          appInfo.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var ManipOptions = function (_React$Component2) {
  _inherits(ManipOptions, _React$Component2);

  function ManipOptions() {
    _classCallCheck(this, ManipOptions);

    return _possibleConstructorReturn(this, (ManipOptions.__proto__ || Object.getPrototypeOf(ManipOptions)).apply(this, arguments));
  }

  _createClass(ManipOptions, [{
    key: "clearAll",
    value: function clearAll() {
      appInfo.options = [];
      masterRender();
    }
  }, {
    key: "chooseRandom",
    value: function chooseRandom() {
      var randomNum = Math.random();
      console.log(randomNum);
    }
  }, {
    key: "renderRandomChoice",
    value: function renderRandomChoice() {
      return React.createElement(
        "button",
        { onClick: this.chooseRandom },
        "Choose For Me"
      );
    }
  }, {
    key: "renderClearAll",
    value: function renderClearAll() {
      return React.createElement(
        "button",
        { onClick: this.clearAll },
        "Clear All!"
      );
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.renderClearAll(),
        this.renderRandomChoice()
      );
    }
  }]);

  return ManipOptions;
}(React.Component);

var EnterOptions = function (_React$Component3) {
  _inherits(EnterOptions, _React$Component3);

  function EnterOptions() {
    _classCallCheck(this, EnterOptions);

    return _possibleConstructorReturn(this, (EnterOptions.__proto__ || Object.getPrototypeOf(EnterOptions)).apply(this, arguments));
  }

  _createClass(EnterOptions, [{
    key: "onFormSubmit",
    value: function onFormSubmit(event) {
      event.preventDefault();
      var option = event.target.elements.option.value;
      console.log("Adding new option:", option);
      if (option) {
        appInfo.options.push(option);
        event.target.elements.option.value = "";
        masterRender();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.onFormSubmit },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          null,
          "Add Option"
        )
      );
    }
  }]);

  return EnterOptions;
}(React.Component);

var Option = function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "makeChoice",
    value: function makeChoice(option) {
      console.log("Choosing", option);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return React.createElement(
        "li",
        {
          key: this.props.id,
          onClick: function onClick(e) {
            e.preventDefault();
            _this5.makeChoice(_this5.props.option);
          }
        },
        this.props.option
      );
    }
  }]);

  return Option;
}(React.Component);

var ListOptions = function (_React$Component5) {
  _inherits(ListOptions, _React$Component5);

  function ListOptions() {
    _classCallCheck(this, ListOptions);

    return _possibleConstructorReturn(this, (ListOptions.__proto__ || Object.getPrototypeOf(ListOptions)).apply(this, arguments));
  }

  _createClass(ListOptions, [{
    key: "checkForChoices",
    value: function checkForChoices() {
      if (appInfo.options && appInfo.options.length > 0) {
        return React.createElement(
          "ol",
          null,
          this.renderChoiceList()
        );
      } else {
        return React.createElement("div", null);
      }
    }
  }, {
    key: "renderChoiceList",
    value: function renderChoiceList() {
      return appInfo.options.map(function (option, index) {
        var id = index + option;
        return React.createElement(Option, { key: id, id: id, option: option });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.checkForChoices();
    }
  }]);

  return ListOptions;
}(React.Component);

var IndecisionApp = function (_React$Component6) {
  _inherits(IndecisionApp, _React$Component6);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(ManipOptions, null),
        React.createElement(EnterOptions, null),
        React.createElement(ListOptions, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var masterRender = function masterRender() {
  ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
};
masterRender();
