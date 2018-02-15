//Reassigning vars is very dangerous, happens silently can cause runtime issues.
var nameVar = "Adam";
var nameVar = "Cobb";
console.log("nameVar", nameVar);

let nameLet = "Elina";
//Cannot redefine a let in the same way as a var.
//This protects against the above problem.
//Can reassign.
// let nameLet = "JP";
nameLet = "JP";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);
//This is also not possible, will cause compilation errors.
//Cannot redefine a const variable in the same file, and cannot redefine a const variable in the same file.
// const nameConst = "Adam";
//This below is also not allowed.
// nameConst = "Adam";
console.log("nameConst", nameConst);

//Block scoping
var fullName = "Adam Cobb";

if (fullName) {
  var firstName = fullName.split(" ")[0];
  console.log("firstName", firstName);
}

//This variable should still be accessible out here.
console.log("firstName", firstName);
//Once you switch it to a const, it can't be accessed outside.