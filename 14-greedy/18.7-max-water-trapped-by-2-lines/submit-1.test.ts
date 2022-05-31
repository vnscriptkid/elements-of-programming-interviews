import { getMaxTrappedWater } from "./submit-1";

test("it works", () => {
  expect(
    getMaxTrappedWater([1, 2, 1, 3, 4, 4, 5, 6, 2, 1, 3, 1, 3, 2, 1, 2, 4, 1])
  ).toEqual(48);
});
