import { findMinMax, MinMax } from "./submit-1";

test("it works", () => {
  expect(findMinMax([3, 2, 5, 1, 2, 4])).toEqual(new MinMax(1, 5));
});
