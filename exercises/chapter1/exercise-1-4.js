/*
 * Exercise 1.4
 *
 * Observe that our model of evaluation allows for
 * applications whose function expressions are compound
 * expressions. Use this observation to describe the behavior
 * of a_plus_abs_b:
 *
 */

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function a_plus_abs_b(a, b) {
  return (b >= 0 ? plus : minus)(a, b);
}

/*
 * Answer
 *
 * For JavaScript's model of evaluation (applicative order evaluation):
 * 'the interpreter first evaluates the function and argument expressions and
 * then applies the resulting function to the resulting arguments'.
 *
 * And: "To apply a compound function to arguments, evaluate the return
 * expression of the function with each parameter replaced by the corresponding
 * argument."
 *
 * In the example above, this is first evaluated:
 * (b >= 0 ? plus : minus)
 *
 * Assuming b is 1 and a is 2, the result is:
 *
 * plus(a, b);
 *
 * Next, a and b are replaced with the value of their arguments:
 *
 * plus(2, 1);
 *
 * */
