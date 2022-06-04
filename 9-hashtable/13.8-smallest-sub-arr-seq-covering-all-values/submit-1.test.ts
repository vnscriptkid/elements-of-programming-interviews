import { findSmallestSequentiallyCoveringSubset } from "./submit-1";

test("it works", () => {
  const result = findSmallestSequentiallyCoveringSubset(
    ["apple", "banana", "cat", "apple"],
    ["banana", "apple"]
  );
  expect(result).toEqual({
    start: 1,
    end: 3,
  });
});
