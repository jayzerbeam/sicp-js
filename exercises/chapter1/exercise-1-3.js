/*
 * Exercise 1.3
 *
 * Declare a function that takes three numbers as arguments and returns the sum
 * of the squares of the two larger numbers.
 *
 * */
var square = function (x) {
    return Math.pow(x, 2);
};
var squareSumOfTwoLargest = function (x, y, z) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (z === void 0) { z = 0; }
    var input = [x, y, z];
    var smallestInput = Math.min(x, y, z);
    input.splice(input.indexOf(smallestInput), 1);
    return square(input[0]) + square(input[1]);
};
console.log(squareSumOfTwoLargest(2, 4, 6));
console.log(squareSumOfTwoLargest(-1, 4, 1));
console.log(squareSumOfTwoLargest(2, 4));
console.log(squareSumOfTwoLargest(9));
