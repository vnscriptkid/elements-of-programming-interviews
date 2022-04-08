// EVALUATE RPN EXPRESSIONS
// A string is said to be an arithmetical expression in Reverse Polish notation (RPN) if:
// (1.) It is a single digit or a sequence of digits, prefixed with an option -, e.g., "6", "123", "-42".
// (2.) It is of the form“A,B,o" where A and B are RPN expressions and o is one of +/-/X, /•

// For example, the following strings satisfy these rules: "1729", "3,4,+,2,X,1,+", "1,1,+,-2,x","-641,6,/,28,/".
// An RPN expression can be evaluated uniquely to an integer, which is determined recursively. The base case corresponds to Rule (1.), which is an integer expressed in base-10 positional system. Rule (2.)corresponds to the recursive case, and the RPNs are evaluated in the natural way, e.g., if A evaluates to 2 and B evaluates to 3, then
// "A,B,x" evaluates to 6.

// Write a program that takes an arithmetical expression in RPN and returns the number that the expression evaluates to.

export function evalExp(exp: string): number | undefined {
  const stack: number[] = [];

  for (let char of exp.split(",")) {
    if ("+-*/".includes(char)) {
      const num1 = stack.pop();
      const num2 = stack.pop();
      let result = 0;
      if (char === "+") {
        result = num1! + num2!;
      } else if (char === "-") {
        result = num1! - num2!;
      } else if (char === "*") {
        result = num1! * num2!;
      } else {
        result = num1! / num2!;
      }
      stack.push(result);
    } else {
      stack.push(parseInt(char));
    }
  }

  return stack.pop();
}
