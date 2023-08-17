/*
 * Exercise 1.5
 *
 * Ben Bitdiddle has invented a test to determine whether the interpreter he is
 * faced with is using applicative-order evaluation or normal-order evaluation.
 * He declares the following two functions:
 *
 * function p() { return p(); }
 *
 * function test(x, y) {
 *     return x === 0 ? 0 : y;
 * }
 *
 * Then he evaluates the statement
 * test(0, p());
 *
 * What behavior will Ben observe with an interpreter that uses applicative-order
 * evaluation? What behavior will he observe with an interpreter that uses
 * normal-order evaluation? Explain your answer. (Assume that the evaluation rule
 * for conditional expressions is the same whether the interpreter is using normal
 * or applicative order: The predicate expression is evaluated first, and the
 * result determines whether to evaluate the consequent or the alternative
 * expression.)
 *
 */

/*
 * Answer
 *
 * Using applicative-order evaluation (as JavaScript's interpreter does), the
 * result will be an infinite loop. This is because applicative-order
 * evaluation first evaluates a function's arguments before proceeding. Since
 * one of our arguments is a function which calls itself, the function argument
 * `p()` will recurse infinitely.
 *
 * Normal-order evaluation does not evaluate arguments until their values are
 * needed. The predicate `0 === 0` will be evaluated first as `true` and then
 * the consequent expression `0` will be evaluated and returned.
 *
 * */
