// COMPUTE ENCLOSED REGIONS

// Let A be a 2D array whose entries are either x or _.
// Write a program that takes A, and replaces all x that cannot reach the boundary with a _.

// INPUT
// _ _ _
// _ o _
// o _ _
// OUTPUT
// _ _ _
// _ _ _
// o _ _

// INPUT
// _ _ _
// _ o _
// o o _
// OUTPUT
// _ _ _
// _ o _
// o o _

// INPUT
// _ _ _ _
// _ o _ _
// _ _ o _
// _ o o _
// OUTPUT
// _ _ _ _
// _ _ _ _
// _ _ o _
// _ o o _

export enum Character {
  o = "o",
  _ = "_",
}

export class Coordinate {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return String([this.x, this.y]);
  }
}

export function fillSurroundedRegions(board: Character[][]) {
  const seen = new Set<string>();
  // check each internal point (while visiting, mark seen)
  for (let row = 1; row <= board.length - 2; row++) {
    for (let col = 1; col <= board[0].length - 2; col++) {
      let curPoint = new Coordinate(row, col);

      // if _ || seen: skip
      if (board[row][col] === Character._ || seen.has(curPoint.toString()))
        continue;
      // if o: find connected o, is this enclosed or not
      const result = findEnclosedRegion(curPoint, seen, board);

      // leads to boundary
      // if not, skip
      if (result) {
        // enclosed: returns list of coords
        // if enclosed, repaint this region
        for (let { x, y } of result) {
          board[x][y] = Character._;
        }
      }
    }
  }
  return board;
}
function findEnclosedRegion(
  curPoint: Coordinate,
  seen: Set<string>,
  board: Character[][],
  path: { value: Coordinate[] | null } = { value: [] }
): null | Coordinate[] {
  if (!path.value) return null;

  path.value.push(curPoint);
  seen.add(curPoint.toString());

  const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  for (let [xOffset, yOffset] of DIRECTIONS) {
    const nextPoint = new Coordinate(
      curPoint.x + xOffset,
      curPoint.y + yOffset
    );

    if (seen.has(nextPoint.toString())) continue;

    if (board[nextPoint.x][nextPoint.y] === Character._) continue;

    // at this point: nextPoint is o, and not visited

    if (onBoundary(nextPoint, board.length, board[0].length)) {
      path.value = null;
    } else {
      findEnclosedRegion(nextPoint, seen, board, path);
    }
  }

  return path.value;
}

function onBoundary(
  nextPoint: Coordinate,
  rows: number,
  cols: number
): boolean {
  return (
    nextPoint.x === 0 ||
    nextPoint.y === 0 ||
    nextPoint.x === rows - 1 ||
    nextPoint.y === cols - 1
  );
}
