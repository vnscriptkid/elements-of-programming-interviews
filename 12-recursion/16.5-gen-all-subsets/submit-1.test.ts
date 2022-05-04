import { combinations } from "./submit-1";

test("it works", () => {
  expect(combinations(5, 2)).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 4],
    [3, 5],
    [4, 5],
  ]);
});
