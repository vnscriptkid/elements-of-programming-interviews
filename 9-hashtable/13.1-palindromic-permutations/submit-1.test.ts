import { canFormPalindrome } from "./submit-1";

test("test 1", () => {
  expect(canFormPalindrome("edified")).toBe(true); // deified
  expect(canFormPalindrome("edifiedd")).toBe(false);
});
