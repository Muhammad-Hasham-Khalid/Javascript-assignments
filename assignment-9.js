// Use the concept of closures and create a function which returns an object with 2 properties of name and age and their setter and getter functions

function createMultiplier(multiplyBy) {
  return function (num) {
    return num * multiplyBy;
  };
}

// use the createMultiplier function to create a multiplier for numbers 4 and 5

// create an object and convert it into string and then convert it back to object using json stringify and parse functions
