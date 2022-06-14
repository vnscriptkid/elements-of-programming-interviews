import { findLargestNumberTeams } from "./submit-1";

test("it works", () => {
  expect(
    findLargestNumberTeams([
      [0, 2],
      [1, 2],
    ])
  ).toEqual(2);
  expect(
    findLargestNumberTeams([
      [0, 1],
      [3, 4],
      [0, 2],
      [0, 4],
      [2, 4],
      [2, 3],
      [1, 3],
      [1, 4],
      [1, 2],
      [0, 3],
    ])
  ).toEqual(5);

  expect(
    findLargestNumberTeams([
      [0, 2],
      [2, 3],
      [0, 3],
      [1, 4],
    ])
  ).toEqual(3);

  expect(
    findLargestNumberTeams([
      [4, 7],
      [1, 2],
      [0, 7],
      [0, 5],
      [4, 6],
      [4, 5],
      [2, 3],
      [1, 3],
      [3, 7],
      [2, 6],
      [1, 4],
      [1, 5],
      [0, 1],
      [2, 5],
      [3, 4],
      [2, 7],
      [3, 6],
      [1, 7],
      [5, 6],
      [6, 7],
      [5, 7],
      [0, 4],
      [0, 3],
      [1, 6],
      [0, 2],
      [3, 5],
      [0, 6],
      [2, 4],
    ])
  ).toEqual(8);
});
