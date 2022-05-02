// Square root computations can be implemented using sophisticated numerical techniques
// involving iterative methods and logarithms.
// However, if you were asked to implement a square root function,
// you would not be expected to know these techniques.

// Implement a function which takes as input a floating point value and returns its square root.

export function squareRoot(x: number): number {
  // 1 2 3 4 5 6 7 8 9
  // l       m       r

  let left = 1,
    right = x;

  while (left <= right) {
    let middle = ~~(left + (right - left) / 2);

    if (middle * middle === x) return middle;

    if (middle * middle > x) {
      // need a smaller middle
      right = middle - 1;
    } else {
      // need a larger middle
      left = middle + 1;
    }
  }

  return -1;
}
