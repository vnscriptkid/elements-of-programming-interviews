import { isAnyPlacementFeasible } from "./submit-1";

test("it works 1", () => {
  const result = isAnyPlacementFeasible([
    [1, 2],
    [2, 3],
    [2, 4],
    [3, 5],
    [4, 5],
  ]);

  /*
    1   |   2
    3   | 
    4   |   5
  */

  expect(result).toEqual(true);
});

test("it works 2", () => {
  const result = isAnyPlacementFeasible([
    [1, 2],
    [2, 3],
    [2, 4],
    [3, 5],
    [4, 5],
    [1, 3],
  ]);

  /*
    1   |   2
    |   |
    3   | 
    4   |   5 
  */

  expect(result).toEqual(false);
});
