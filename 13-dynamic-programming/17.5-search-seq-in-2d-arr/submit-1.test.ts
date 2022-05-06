import { isPatternContainedInGrid } from "./submit-1";

test("it works 1", () => {
  expect(
    isPatternContainedInGrid(
      [
        [1, 2, 3],
        [3, 4, 5],
        [5, 6, 7],
      ],
      [1, 3, 4, 6]
    )
  ).toBe(true);
});

test("it works 2", () => {
  expect(
    isPatternContainedInGrid(
      [
        [1, 2, 3],
        [3, 4, 5],
        [5, 6, 7],
      ],
      [1, 2, 3, 4]
    )
  ).toBe(false);
});
