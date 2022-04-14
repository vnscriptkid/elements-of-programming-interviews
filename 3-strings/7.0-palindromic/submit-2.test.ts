import { isPalindromic } from "./submit-2";

test("isPalindromic", () => {
  expect(isPalindromic("aba")).toBeTruthy();
  expect(isPalindromic("aaccaa")).toBeTruthy();
  expect(isPalindromic("abc")).toBeFalsy();
});
