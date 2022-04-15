// TEST A STRING OVER FOR WELL-FORMEDNESS

// A string over the characters "{,},(,),[,]" is said to be well-formed if the different types of brackets match in the correct order.
// For example, "([]){()}" is well-formed, as is "[()[]{()()}]". However, "{)" and "[()[]{()()" are not well-formed,
// Write a program that tests if a string made up of the characters '(', ')', '[', ']', '{' and '}' is well-formed.

export function isWellFormed(s: string) {
  const stack = [];

  for (let char of s) {
    if ("([{".includes(char)) {
      stack.push(char);
    } else {
      // )]}
      if (stack.length === 0) return false;
      const opening = stack.pop();

      if (!isMatched(char, opening!)) return false;
    }
  }

  return stack.length === 0;
}
function isMatched(char: string, opening: string) {
  const case1 = char === ")" && opening === "(";
  const case2 = char === "]" && opening === "[";
  const case3 = char === "}" && opening === "{";

  return case1 || case2 || case3;
}
