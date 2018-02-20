//Car
//make
//model
//vin
//getDescription
class Person {
  constructor(name = "Anonymous", age = 26) {
    console.log("name:", name);
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return this.name + " says hi";
  }

  getAge() {
    return this.age;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old!`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  getMajor() {
    return this.major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}!`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home;
  }

  hasHome() {
    return !!this.home;
  }

  getHome() {
    return this.home;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHome()) {
      greeting += ` from ${this.home}.`;
    }
    return greeting;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasHome()) {
      description += ` They will be traveling from ${this.home}.`;
    }
    return description;
  }
}

const me = new Student("Adam Cobb", 30, "Computer Engineering");
console.log("me:", me);
console.log("greeting:", me.getGreeting());
console.log("I'm", me.getAge(), "years old!");
console.log(me.getDescription());
console.log("Do we have a major?", me.hasMajor());

const other = new Student();
console.log("other:", other);
console.log("greeting:", other.getGreeting());
console.log("I'm", other.getAge(), "years old!");
console.log(other.getDescription());
console.log("Do we have a major?", other.hasMajor());

const travel = new Traveler("Adam Cobb", 29, "San Francisco");
console.log(travel);
console.log(travel.getDescription());
console.log(travel.getGreeting());
