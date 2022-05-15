import { findMinDistanceSortedArrays } from "./submit-1";

test("it works", () => {
  // For example, if the three arrays are (5,10,15), (3,6,9,12,15), and (8,16,24),
  // then 15,15,16 he in the smallest possible interval.
  const result = findMinDistanceSortedArrays([
    [5, 10, 15],
    [3, 6, 9, 12, 15],
    [8, 16, 24],
  ]);

  expect(result).toEqual(1);
});
