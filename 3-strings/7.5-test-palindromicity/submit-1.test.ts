import { isPalindrome } from "./submit-1";

test("it works", () => {
  expect(isPalindrome("A man, a plan, a canal, Panama.")).toEqual(true);
  expect(isPalindrome("Able was I, ere I saw Elba!")).toEqual(true);
  expect(isPalindrome("Ray a Ray")).toEqual(false);
});
