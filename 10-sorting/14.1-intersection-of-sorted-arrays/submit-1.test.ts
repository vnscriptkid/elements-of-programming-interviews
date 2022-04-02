// For example, the input is (2,3,3,5,5,6,7,7,8,12} and (5,5,6,8,8,9,10,10), your output should be (5,6,8).

import { intersectTwoSortedArrays } from "./submit-1";

test("it works 1", () => {
  expect(
    intersectTwoSortedArrays(
      [2, 3, 3, 5, 5, 6, 7, 7, 8, 12],
      [5, 5, 6, 8, 8, 9, 10, 10]
    )
  ).toEqual([5, 6, 8]);
});
