// Write the implementation the following function which takes an argument (number) and returns the factorial of it

const factorial = (n) => {};

console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(1));

// Write the implementation of the following function which takes an argument (string) and returns the number of vowels present in it

const numberOfVowels = (s) => {};

console.log(numberOfVowels("hello world"));
console.log(numberOfVowels(""));
console.log(numberOfVowels("niceee"));
console.log(numberOfVowels("qwrtypsdfghjklzxcvbnm"));

// Write the implementation of the following function which takes an object and returns the number of properties on it

const numberOfProperties = (obj) => {};

console.log(numberOfProperties({}));
console.log(numberOfProperties({ name: "John", age: "nice" }));
console.log(numberOfProperties(window));

// Write the implmentation of the following function which takes an object and a name of a property (string) and removes the property from the object if it exists then returns the object

const removePropertyIfExists = (obj, prop) => {};

const newObject = removePropertyIfExists(
  { name: "Javascript", somethingSerious: "foo" },
  "bar"
);

const anotherNewObject = removePropertyIfExists(
  { name: "Javascript", somethingSerious: "foo" },
  "name"
);

console.log(newObject);
console.log(anotherNewObject);
