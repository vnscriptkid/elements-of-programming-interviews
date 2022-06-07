import { calculateLargestRectangle } from "./submit-1";

test("it works", () => {
  expect(
    calculateLargestRectangle([1, 4, 2, 5, 6, 3, 2, 6, 6, 5, 2, 1, 3])
  ).toEqual(20);
});
