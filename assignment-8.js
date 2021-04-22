// (Note: use higher order array methods)

// Given an array of numbers create a new array with squares of the numbers
const numbers = Array(10)
  .fill(5)
  .map(() => parseInt(Math.random() * 100 + 5));

// Given a mixed array filter out the even numbers from the array
const numbers = Array(10)
  .fill(10)
  .map(() => parseInt(Math.random() * 100 + 5));

// Given an array of objects having a property age on them print how many of them are eligible to get an NIC i.e their age is greater than or equal to 18

const persons = Array(10)
  .fill(10)
  .map(() => ({
    age: parseInt(Math.random() * 80 + 10),
  }));

// Print on the screen whether all of the persons in the person array are eligible for NIC

// Print on the screen whether some of the persons in the person array are eligible for NIC

// Use the array of numbers from the first question and calculate the sum of all the numbers using the reduce function

// Use the array of numbers from the first question and print the minimum of all the numbers using the reduce function

// Use the array of numbers from the first question and print the maximum of all the numbers using the reduce function
