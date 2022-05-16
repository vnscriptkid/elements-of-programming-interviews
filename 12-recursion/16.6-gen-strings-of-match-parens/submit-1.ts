// GENERATE STRINGS OF MATCHED PARENS

// Strings in which parens are matched are defined by the following three rules:
// • The empty string, "", is a string in which parens are matched.
// • The addition of a leading left parens and a trailing right parens to a string in
// which parens are matched results in a string in which parens are matched.
// For example, since "(())()" is a string with matched parens, so is "((())())".
// • The concatenation of two strings in which parens are matched is itself a string
// in which parens are matched.
// For example, since "(())()" and "()" are strings with matched parens, so is "(())()()".

// For example, the set of strings containing two pairs of matched parens is {(()),()()},
// and the set of strings with three pairs of matched parens is {((())), (()()), (())(), ()(()), ()()()}

// Write a program that takes as input a number and returns all the strings with that number of matched pairs of parens.

// n: 2
//            ""

//            ()

//       (())   ()()

// n: 3
//               ""
//               ()

//      (())             ()()

// ((()))   (())()   (()())   ()()()

// final State: str.length === 4
// cache seen matched parent in a set

export function generateBalancedParentheses(
  numPairs: number,
  cur = "",
  result: string[] = [],
  seen: Set<string> = new Set()
): string[] {
  if (seen.has(cur)) return result;

  seen.add(cur);

  if (cur.length === numPairs * 2) {
    result.push(cur);
    return result;
  }

  generateBalancedParentheses(numPairs, `(${cur})`, result, seen);
  generateBalancedParentheses(numPairs, `()${cur}`, result, seen);
  generateBalancedParentheses(numPairs, `${cur}()`, result, seen);

  return result;
}
// export function generateBalancedParentheses(
//   numPairs: number,
//   cur = "",
//   result: string[] = [],
//   seen: Set<string> = new Set()
// ): string[] {
//   if (cur.length === numPairs * 2) {
//     result.push(cur);
//     return result;
//   }

//   let next1 = "(" + cur + ")";
//   if (!seen.has(next1)) {
//     seen.add(next1);
//     generateBalancedParentheses(numPairs, next1, result, seen);
//   }

//   let next2 = "()" + cur;
//   if (!seen.has(next2)) {
//     seen.add(next2);
//     generateBalancedParentheses(numPairs, next2, result, seen);
//   }

//   let next3 = cur + "()";
//   if (!seen.has(next3)) {
//     seen.add(next3);
//     generateBalancedParentheses(numPairs, next3, result, seen);
//   }

//   return result;
