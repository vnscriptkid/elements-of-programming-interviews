import { isDeadlocked } from "./submit-1";

test("it works", () => {
  // A simple two nodes cycle
  expect(
    isDeadlocked([
      [0, 1],
      [1, 0],
    ])
  ).toEqual(true);
  //   A simple three nodes cycle
  expect(
    isDeadlocked([
      [0, 1],
      [1, 2],
      [2, 0],
    ])
  ).toEqual(true);
  // A star tree
  expect(
    isDeadlocked([
      [0, 1],
      [0, 2],
      [0, 3],
    ])
  ).toEqual(false);
  // A line
  expect(
    isDeadlocked([
      [0, 1],
      [1, 2],
      [2, 3],
    ])
  ).toEqual(false);
  //
  expect(
    isDeadlocked([
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [4, 6],
      [6, 1],
    ])
  ).toEqual(true);
});
