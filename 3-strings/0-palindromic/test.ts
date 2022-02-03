import { isPalindromic } from ".";

test("isPalindromic", () => {
  expect(isPalindromic("aba")).toBeTruthy();
  expect(isPalindromic("aaccaa")).toBeTruthy();
  expect(isPalindromic("abc")).toBeFalsy();
});
