// SEARCH FOR A SEQUENCE IN A 2D ARRAY

// Suppose you are given a 2D array of integers (the "grid"),
// and a ID array of integers (the "pattern").
// We say the pattern occurs in the grid if it is possible to start from some entry
// in the grid and traverse adjacent entries in the order specified by the pattern till
// all entries in the pattern have been visited.
// The entries adjacent to an entry are the ones directly above, below, to the left, and to the right, assuming they exist.
// For example, the entries adjacent to (3,4) are (3,3), (3,5), (4,4) and (5,4).
// It is acceptable to visit an entry in the grid more than once.

export function isPatternContainedInGrid(grid: number[][], pattern: number[]) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (dfs(grid, i, j, pattern, 0)) return true;
    }
  }
  return false;
}
function dfs(
  grid: number[][],
  x: number,
  y: number,
  pattern: number[],
  curIdx: number,
  visited = new Set()
): boolean {
  if (curIdx === pattern.length) return true;

  const key = String([x, y]);

  visited.add(key);

  if (pattern[curIdx] !== grid[x][y]) return false;

  const NEXT_MOVES = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let [xOffset, yOffset] of NEXT_MOVES) {
    const [newX, newY] = [x + xOffset, y + yOffset];

    if (!isValidPoint(grid, newX, newY)) continue;

    if (visited.has(String([newX, newY]))) continue;

    if (dfs(grid, newX, newY, pattern, curIdx + 1, visited)) return true;
  }

  return false;
}

function isValidPoint(grid: number[][], x: number, y: number): boolean {
  const numOfRows = grid.length;
  const numOfCols = grid[0].length;

  return x >= 0 && x < numOfRows && y >= 0 && y < numOfCols;
}
