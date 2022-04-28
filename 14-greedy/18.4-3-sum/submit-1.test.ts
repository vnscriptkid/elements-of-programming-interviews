import { hasThreeSum } from "./submit-1";

test("it works", () => {
  expect(hasThreeSum([11, 2, 5, 7, 3], 21)).toEqual(true);
  expect(hasThreeSum([11, 2, 5, 7, 3], 22)).toEqual(false);
});
