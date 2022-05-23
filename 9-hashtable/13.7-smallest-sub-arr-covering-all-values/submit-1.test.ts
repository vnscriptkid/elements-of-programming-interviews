import { findSmallestSubarrayCoveringSet } from "./submit-1";

test("it works", () => {
  expect(
    findSmallestSubarrayCoveringSet(
      [
        "apple",
        "banana",
        "apple",
        "apple",
        "dog",
        "cat",
        "apple",
        "dog",
        "banana",
        "apple",
        "cat",
        "dog",
      ],
      new Set(["banana", "cat"])
    )
  ).toEqual([8, 10]);
});
