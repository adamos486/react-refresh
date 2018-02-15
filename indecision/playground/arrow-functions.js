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
const squareArrow = (x) => x*x;

console.log(squareArrow(5));

//Challenge use arrow functions for everything we create
//Create function called getFirstName
const user = {
  name: "Adam Cobb"
};

const getFirstName = (name) => {
  const firstName = name.split(" ")[0]; //Always assumes we have a name with a space in the middle.
  return firstName;
};

console.log("getFirstName()", getFirstName(user.name));

const getFirstNameShort = name => name.split(" ")[0];

console.log("getFirstNameShort()", getFirstNameShort(user.name));