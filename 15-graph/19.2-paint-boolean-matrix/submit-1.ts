// PAINT A BOOLEAN MATRIX

// mplement a routine that takes an n X m Boolean array A together with an entry (x, y) and
// flips the color of the region associated with (x, y). See Figure 19.6 for an example of flipping.

class Coordinate {
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

export function flipColor(a: boolean[][], x: number, y: number) {
  // BFS => queue
  // pop out from queue
  // colorize cur coordinate, mark as visited
  // find all adjacent coords, push in queue
  const queue = [new Coordinate(x, y)]; // push, shift

  const destColor = !a[x][y];

  const DIRS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (queue.length) {
    const coord = queue.shift();

    a[coord!.x][coord!.y] = destColor;

    for (let [xOffset, yOffset] of DIRS) {
      const newCoord = new Coordinate(coord!.x + xOffset, coord!.y + yOffset);

      if (!insideMatrix(a, newCoord) || a[newCoord.x][newCoord.y] === destColor)
        continue;

      queue.push(newCoord);
    }
  }

  return a;
}
function insideMatrix(a: boolean[][], newCoord: Coordinate) {
  const rows = a.length,
    cols = a[0].length;

  const { x, y } = newCoord;

  return x >= 0 && x < rows && y >= 0 && y < cols;
}
