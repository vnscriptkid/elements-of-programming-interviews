import { solveSudoku } from "./submit-1";

test("it works", () => {
  const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];

  const result = solveSudoku(board);

  expect(result).toEqual(true);

  expect(board.map((row) => new Set(row).size === 9).every((x) => x)).toEqual(
    true
  );

  for (let col = 0; col < 9; col++) {
    const colValues = board.map((row) => row[col]);
    expect(new Set(colValues).size === 9);
  }
});
