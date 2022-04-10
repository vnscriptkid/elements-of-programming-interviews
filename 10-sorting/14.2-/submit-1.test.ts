import { mergeTwoSortedArrays } from "./submit-1";

test("it works", () => {
  // For example, consider (5,13,17,_,_,_,_,_) and (3,7,11,19), where _ denotes an empty entry.
  // Then the combined sorted entries can be stored in the first array as(3,5,7,11,13,17,19,_).
  expect(
    mergeTwoSortedArrays(
      [5, 13, 17, null, null, null, null, null] as any,
      3,
      [3, 7, 11, 19],
      4
    )
  ).toEqual([3, 5, 7, 11, 13, 17, 19, null]);
});
