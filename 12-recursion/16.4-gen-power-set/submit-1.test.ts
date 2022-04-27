import { generatePowerSet } from "./submit-1";

test("it works", () => {
  expect(generatePowerSet([0, 1, 2])).toEqual([
    [0, 1, 2],
    [0, 1],
    [0, 2],
    [0],
    [1, 2],
    [1],
    [2],
    [],
  ]);
});
