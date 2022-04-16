import { sortKIncreasingDecreasingArray } from "./submit-1";

test("it works", () => {
  const list = [57, 131, 493, 221, 294, 339, 418, 452, 190, 442];

  expect(sortKIncreasingDecreasingArray(list)).toEqual([
    57, 131, 190, 221, 294, 339, 418, 442, 452, 493,
  ]);
});
