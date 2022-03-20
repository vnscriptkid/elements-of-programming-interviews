import { isPalindromic } from "./submit-1";

test("isPalindromic", () => {
  expect(isPalindromic("aba")).toBeTruthy();
  expect(isPalindromic("aaccaa")).toBeTruthy();
  expect(isPalindromic("abc")).toBeFalsy();
});
