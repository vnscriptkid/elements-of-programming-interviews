// GENERATE ALL NONATTACKING PLACEMENTS OF n-Queens

// A nonattacking placement of queens is one in which
// no two queens are in the same row, column, or diagonal.

// Write a program which returns all distinct nonattacking placements of n queens on an nxn chessboard,
// where n is an input to the program.

//    0  1  2  3
// 0  _  x  _  _
// 1  _  _  _  x
// 2  x  _  _  _
// 3  _  _  x  _

//    0  1  2  3
// 0  _  _  x  _
// 1  x  _  _  _
// 2  _  _  _  x
// 3  _  x  _  _

// [1, 3, 0, 2]
// [2, 0, 3, 1]

export function nQueens(n: number) {
  const result: any = [];

  placeQueen(n, 0, result, []);

  return result;
}

function placeQueen(
  n: number,
  curRow: number,
  result: number[][],
  placements: number[] = []
) {
  // base case
  if (curRow === n) {
    result.push([...placements]);
  } else {
    for (let col = 0; col < n; col++) {
      if (isValidPos(col, placements)) {
        placements.push(col);

        placeQueen(n, curRow + 1, result, placements);

        placements.pop();
      }
    }
  }
}
function isValidPos(curCol: number, placements: number[]): boolean {
  if (placements.includes(curCol)) return false;

  if (
    placements.length > 0 &&
    Math.abs(placements[placements.length - 1] - curCol) === 1
  )
    return false;

  return true;
}
