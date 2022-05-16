import { generateBalancedParentheses } from "./submit-1";

test("it works", () => {
  expect(generateBalancedParentheses(2)).toEqual(["(())", "()()"]);
  expect(generateBalancedParentheses(3)).toEqual([
    "((()))",
    "()(())",
    "(())()",
    "(()())",
    "()()()",
  ]);
});
