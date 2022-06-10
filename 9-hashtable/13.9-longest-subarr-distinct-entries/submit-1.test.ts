import { longestSubarrayWithDistinctEntries } from "./submit-1";

test("it works", () => {
  expect(
    longestSubarrayWithDistinctEntries([
      "f",
      "s",
      "f",
      "e",
      "t",
      "w",
      "e",
      "n",
      "w",
      "e",
    ])
  ).toEqual(5);
});
