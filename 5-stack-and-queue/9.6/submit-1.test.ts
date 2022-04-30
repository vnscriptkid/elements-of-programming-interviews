import { examineBuildingsWithSunset } from "./submit-1";

test("it works 1", () => {
  const result = examineBuildingsWithSunset([5, 3, 6, 4, 5, 6, 8]);
  expect(result).toEqual([0, 2, 6]);
});
