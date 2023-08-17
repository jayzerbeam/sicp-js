/*
 * Exercise 1.1
 *
 * Below is a sequence of statements. What is the result printed by the
 * interpreter in response to each statement? Assume the sequence is to be
 * evaluated in the order in which it is presented.
 *
 * */

10;
// 10

5 + 3 + 4;
// 12

9 - 1;
// 8

6 / 2;
// 12

2 * 4 + (4 - 6);
/*
 * 2 * 4 + (4 - 6)
 * (2 * 4) + (-2)
 * 8 - 2
 * 6
 */

const a = 3;
// undefined

const b = a + 1;
// undefined

a + b + a * b;
/*
 * 3 + 4 + 3 * 4
 * 3 + 4 + (3 * 4)
 * 3 + 4 + 12
 * 19
 */

a === b;
// 3 === 4
// false

b > a && b < a * b ? b : a;
/*
 * 4 > 3 && 4 < 3 * 4 ? 4 : 3
 * (4 > 3) && (4 < (3 * 4) ? 4 : 3)
 * true && (4 < (3 * 4) ? 4 : 3)
 * true && (4 < 12 ? 4 : 3)
 * true && true ? 4 : 3
 * true && 4
 *
 * My answer: true
 * Actual answer: 4
 *
 * "...(JavaScript is) different to other languages in that it returns
 * the result of the last value that halted the execution, instead of a true,
 * or false value."
 * Source: https://stackoverflow.com/a/3088498
 */

a === 4 ? 6 : b === 4 ? 6 + 7 + a : 25;
/*
 * false ? 6 : b === 4 ? 6 + 7 + a : 25
 * true ? 6 + 7 + a : 25
 * 6 + 7 + 3
 * 16
 *
 * Explanation:
 * if a === 4 return 6
 * else if b === 4 return 6 + 7 + a
 * else return 25
 */

2 + (b > a ? b : a);
/*
 * 2 + (4 > 3 ? 4 : 3)
 * 2 + (true ? 4 : 3)
 * 2 + 4
 * 6
 */

(a > b ? a : a < b ? b : -1) * (a + 1);
/*
 * (3 > 4 ? 3 : 3 < 4 ? 4 : -1) * (3 + 1);
 * (false ? 3 : true ? 4 : -1) * 4;
 * 4 * 4
 * 16
 */
