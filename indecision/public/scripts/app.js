"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Car
//make
//model
//vin
//getDescription
var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous";
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 26;

    _classCallCheck(this, Person);

    console.log("name:", name);
    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "getGreeting",
    value: function getGreeting() {
      return this.name + " says hi";
    }
  }, {
    key: "getAge",
    value: function getAge() {
      return this.age;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this.name + " is " + this.age + " years old!";
    }
  }]);

  return Person;
}();

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, major) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

    _this.major = major;
    return _this;
  }

  _createClass(Student, [{
    key: "getMajor",
    value: function getMajor() {
      return this.major;
    }
  }, {
    key: "hasMajor",
    value: function hasMajor() {
      return !!this.major;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), "getDescription", this).call(this);
      if (this.hasMajor()) {
        description += " Their major is " + this.major + "!";
      }
      return description;
    }
  }]);

  return Student;
}(Person);

var Traveler = function (_Person2) {
  _inherits(Traveler, _Person2);

  function Traveler(name, age, home) {
    _classCallCheck(this, Traveler);

    var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

    _this2.home = home;
    return _this2;
  }

  _createClass(Traveler, [{
    key: "hasHome",
    value: function hasHome() {
      return !!this.home;
    }
  }, {
    key: "getHome",
    value: function getHome() {
      return this.home;
    }
  }, {
    key: "getGreeting",
    value: function getGreeting() {
      var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), "getGreeting", this).call(this);
      if (this.hasHome()) {
        greeting += " from " + this.home + ".";
      }
      return greeting;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      var description = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), "getDescription", this).call(this);
      if (this.hasHome()) {
        description += " They will be traveling from " + this.home + ".";
      }
      return description;
    }
  }]);

  return Traveler;
}(Person);

var me = new Student("Adam Cobb", 30, "Computer Engineering");
console.log("me:", me);
console.log("greeting:", me.getGreeting());
console.log("I'm", me.getAge(), "years old!");
console.log(me.getDescription());
console.log("Do we have a major?", me.hasMajor());

var other = new Student();
console.log("other:", other);
console.log("greeting:", other.getGreeting());
console.log("I'm", other.getAge(), "years old!");
console.log(other.getDescription());
console.log("Do we have a major?", other.hasMajor());

var travel = new Traveler("Adam Cobb", 29, "San Francisco");
console.log(travel);
console.log(travel.getDescription());
console.log(travel.getGreeting());
