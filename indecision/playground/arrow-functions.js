const square = function(x) {
  return x * x;
};

console.log(square(8));

//All arrow functions are anonymous.
//This const syntax gives it a variable name.
// const squareArrow = (x) => {
//   return x * x;
// };

//This expression is explicitly returned because you don't need when just returning one context.
const squareArrow = x => x * x;

console.log(squareArrow(5));

//Challenge use arrow functions for everything we create
//Create function called getFirstName
const user = {
  name: "Adam Cobb"
};

const getFirstName = name => {
  const firstName = name.split(" ")[0]; //Always assumes we have a name with a space in the middle.
  return firstName;
};

console.log("getFirstName()", getFirstName(user.name));

const getFirstNameShort = name => name.split(" ")[0];

console.log("getFirstNameShort()", getFirstNameShort(user.name));

//arguments object - no longer bound with arrow functions
const add = function(a, b) {
  //This will print out all of the arguments provided to a function, regardless of what's defined in the arguments list.
  console.log("arguments", arguments);
  return a + b;
};

console.log(add(55, 1));

const addArrow = (a, b) => {
  // console.log("Arguments", arguments)
  //This is no longer allowed you have no access and it will break.
  return a + b;
};

//this keyword is no longer bound to this scope.
const userEntry = {
  name: "Adam",
  cities: ["San Francisco", "Oakland", "Walnut Creek", "Davis", "Poway"],
  printPlacesLived: function () {
    this.cities.forEach(city => {
      console.log(this.name, "has lived in", city);
    });

    //Name will all come back as undefined.
    this.cities.forEach(function (city) {
      console.log(this.name, "has lived in", city);
    });
  }
};
userEntry.printPlacesLived();

//Arrow functions adapt the this context of their parents.
//When you define one at the object level, and depend on properties inside that object, aka. this,
//Then you will not have that accessible to you if you use an arrow function. Instead the context will flow up to the
//parent which is the containing class in this case which likely doesn't know or has incorrect data on the property.
//To fix this, always use es5 functions when you're defining these cases otherwise you're gonna have a really bad
//time.

//ES6 Method definition.
const userMethodEntry = {
  name: "Adam",
  cities: ["San Francisco", "Oakland", "Walnut Creek", "Davis", "Poway"],
  printPlacesLived() {
    this.cities.forEach((city) => {
      console.log(this.name, "has lived in", city);
    });

    //You can modify the map by using map, so this becomes useful for decoration, filtering, etc.
    const messages = this.cities.map((city) => {
      return this.name + " has lived in " + city;
    });
    console.log(messages);
    console.log("old array:", this.cities);
  }
};
userMethodEntry.printPlacesLived();

const multiplier = {
  //numbers to be multiplied
  entries: [298, 38, 357, 5, 29, 59],
  //single number to multiply by
  multiplyBy: 6,
  //multiply method
  multiply() {
    return this.entries.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());