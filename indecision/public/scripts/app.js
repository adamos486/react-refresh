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
          this.props.title
        ),
        React.createElement(
          "h3",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var ManipOptions = function (_React$Component2) {
  _inherits(ManipOptions, _React$Component2);

  function ManipOptions(props) {
    _classCallCheck(this, ManipOptions);

    var _this2 = _possibleConstructorReturn(this, (ManipOptions.__proto__ || Object.getPrototypeOf(ManipOptions)).call(this, props));

    _this2.clearAll = _this2.clearAll.bind(_this2);
    return _this2;
  }

  _createClass(ManipOptions, [{
    key: "clearAll",
    value: function clearAll() {
      console.log(this.props.options);
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
    key: "handleAddOption",
    value: function handleAddOption(event) {
      event.preventDefault();
      var option = event.target.elements.option.value.trim();
      console.log("Adding new option:", option);
      if (option) {
        this.props.options.push(option);
        event.target.elements.option.value = "";
        masterRender();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleAddOption.bind(this) },
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
      if (this.props.options && this.props.options.length > 0) {
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
      return this.props.options.map(function (option, index) {
        var id = index + option;
        return React.createElement(Option, { key: id, option: option });
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

    // options: ["One", "Two"];

    value: function render() {
      var title = "Indecision";
      var subtitle = "I don't care about you.";
      var options = ["Harry Potter", "Star Wars"];
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(ManipOptions, { options: options }),
        React.createElement(EnterOptions, { options: options }),
        React.createElement(ListOptions, { options: options })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var masterRender = function masterRender() {
  ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
};
masterRender();
