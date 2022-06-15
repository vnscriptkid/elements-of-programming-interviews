import { nextPermutation } from "./submit-1";

test("it works", () => {
  expect(nextPermutation([1, 0, 3, 2])).toEqual([1, 2, 0, 3]);
  expect(nextPermutation([3, 2, 1, 0])).toEqual([]);
});
