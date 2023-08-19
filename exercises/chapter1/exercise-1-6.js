/*
 * Exercise 1.6
 *
 * Alyssa P. Hacker doesn't like the syntax of conditional expressions, involving
 * the characters ? and :. “Why can't I just declare an ordinary conditional
 * function whose application works just like conditional expressions?” she
 * asks. Alyssa's friend Eva Lu Ator claims this can indeed be done, and she
 * declares a conditional function, `conditional`.
 *
 * Delighted, Alyssa uses `conditional` to rewrite the square-root program,
 * `sqrt_iter`. What happens when Alyssa attempts to use this to compute square
 * roots? Explain.
 *
 */

function square(x) {
  return x * x;
}

function abs(x) {
  return x > 0 ? x : x === 0 ? 0 : -x;
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function is_good_enough(guess, x) {
  return abs(square(guess) - x) < 0.001;
}

function conditional(predicate, then_clause, else_clause) {
  return predicate ? then_clause : else_clause;
}

function sqrt_iter(guess, x) {
  return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
  // The code below results in stack overflow
  // return conditional(
  //   is_good_enough(guess, x),
  //   guess,
  //   sqrt_iter(improve(guess, x), x),
  // );
}

console.log(sqrt_iter(12, 0.00000001));

/*
 * Answer
 *
 * The stack will overflow: `RangeError: Maximum call stack size exceeded`.
 *
 * We can begin to track down the bug by replacing `conditional` with an actual
 * conditional expression:
 *
 * function sqrt_iter(guess, x) {
 *   return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
 * }
 *
 * Using the same arguments, a numerical result is returned, so the issue must
 * be within the `conditional` function.
 *
 * The root of the issue is that the JavaScript interpreter uses
 * applicative-order evaluation; this evaluation process first evaluates
 * function arguments before calling the function whose arguments are being
 * evaluated. In the example above, `conditional` has an argument
 * `sqrt_iter(improve(guess, x), x)` which calls itself, resulting in a
 * stack overflow.
 *
 * */
