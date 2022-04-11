import { nQueens } from "./submit-1";

test("it works", () => {
  expect(nQueens(4)).toEqual([
    [1, 3, 0, 2],
    [2, 0, 3, 1],
  ]);
});
