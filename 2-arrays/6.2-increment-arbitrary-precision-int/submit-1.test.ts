import { plusOne } from "./submit-1";

test("it works", () => {
  expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
  expect(plusOne([1, 9, 9])).toEqual([2, 0, 0]);
  expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
});
