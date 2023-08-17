/*
 * Exercise 1.3
 *
 * Declare a function that takes three numbers as arguments and returns the sum
 * of the squares of the two larger numbers.
 *
 * */

const square = (x: number): number => {
  return x ** 2;
};

const squareSumOfTwoLargest = (
  x: number = 0,
  y: number = 0,
  z: number = 0,
): number => {
  let input = [x, y, z];
  let smallestInput = Math.min(x, y, z);
  input.splice(input.indexOf(smallestInput), 1);
  return square(input[0]) + square(input[1]);
};

console.log(squareSumOfTwoLargest(2, 4, 6));
console.log(squareSumOfTwoLargest(-1, 4, 1));
console.log(squareSumOfTwoLargest(2, 4));
console.log(squareSumOfTwoLargest(9));
