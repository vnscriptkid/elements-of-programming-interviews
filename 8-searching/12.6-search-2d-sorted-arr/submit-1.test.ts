import { matrixSearch } from "./submit-1";

test("it works", () => {
  const matrix = [
    [-1, 2, 4, 4, 6],
    [1, 5, 5, 9, 21],
    [3, 6, 6, 9, 22],
    [3, 6, 8, 10, 24],
    [6, 8, 9, 12, 25],
    [8, 10, 12, 13, 40],
  ];

  expect(matrixSearch(matrix, 12)).toEqual(true);
  expect(matrixSearch(matrix, 8)).toEqual(true);
  expect(matrixSearch(matrix, 9)).toEqual(true);
  expect(matrixSearch(matrix, 0)).toEqual(false);
  expect(matrixSearch(matrix, 14)).toEqual(false);
});
