// Q1: Explore the Math module in javascript and write use cases of all the methods that you explored
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// Example:
// Math.random()
console.log(Math.random()); // gives a random number between 0 and 1

// Q2: Take a number input from the user and print its table on the console

// Q3: Iterate on the given array using nested for loops and print each element on the console
const array = new Array(parseInt(Math.random() * 20 + 5))
  .fill(5)
  .map(() =>
    new Array(parseInt(Math.random() * 10))
      .fill(5)
      .map(() => (Math.random() * 20).toFixed(2))
  );

// Create new object and iterate over all the properties and log the property name and its value on the console
