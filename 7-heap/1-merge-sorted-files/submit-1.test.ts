import { mergeSortedArr } from "./submit-1";

test("merge sorted arr", () => {
  expect(
    mergeSortedArr([
      [3, 5, 7],
      [0, 6],
      [0, 6, 28],
    ])
  ).toEqual([0, 0, 3, 5, 6, 6, 7, 28]);
});
