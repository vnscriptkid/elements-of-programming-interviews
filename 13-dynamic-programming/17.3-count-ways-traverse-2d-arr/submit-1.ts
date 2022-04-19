// COUNT THE NUMBER OF WAYS TO TRAVERSE A 2D ARRAY

// In this problem you are to count the number of ways of
// starting at the top-left comer of a 2D array and getting to the bottom-right comer.
// All moves must either go right or down.

// For example, we show three ways in a 5 X 5 2D array in Figure 17.5.
// (As we will see, there are a total of 70 possible ways for this example.)

// 3*3
//   0 1 2
// 0 s _ _
// 1 _ _ _
// 2 _ _ e

// start: (0,0)

// prev: (1,2) || (2,1)

// end: (2,2)

class Point {
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

export function numberOfWays(n: number, m: number) {
  return waysToHere(new Point(n - 1, m - 1));
}

function waysToHere(dest: Point, cache: any = {}): number {
  const cacheKey = dest.toString();

  if (!(cacheKey in cache)) {
    if (dest.x < 0 || dest.y < 0) return 0;

    if (dest.x === 0 && dest.y === 0) return 1;

    const leftPoint = new Point(dest.x, dest.y - 1);
    const abovePoint = new Point(dest.x - 1, dest.y);

    cache[cacheKey] = waysToHere(leftPoint) + waysToHere(abovePoint);
  }

  return cache[cacheKey];
}
