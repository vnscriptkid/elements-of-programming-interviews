// 16.9 IMPLEMENT A SUDOKU SOLVER

// Implement a Sudoku solver. See Problem 6.16 on Page 85 for a definition of Sudoku.

const SCALE = 9;

export function solveSudoku(board: string[][]): boolean {
  return solveable(board, 0, 0);
}
function solveable(board: string[][], x: number, y: number): boolean {
  if (y === SCALE) {
    return solveable(board, x + 1, 0);
  }

  if (x === SCALE) return true;

  if (board[x][y] !== ".") {
    return solveable(board, x, y + 1);
  }
  // at each step (fn call), try to fill one cell
  // cell has row and col, use remaining values
  const rowValues = board[x];
  const colValues = board.map((row) => row[y]);

  for (let choice of ["1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
    // move to next cell (left to right, top to bottom)
    if (!rowValues.includes(choice) && !colValues.includes(choice)) {
      board[x][y] = choice;

      if (solveable(board, x, y + 1)) return true;

      board[x][y] = ".";
    }
  }
  // if able to reach last cell, last row, col === 9 => done
  // if can't proceed with one route, backtrack
  return false;
}
