// COMPUTE THE REAL SQUARE ROOT

// Square root computations can be implemented using sophisticated numerical techniques
// involving iterative methods and logarithms.
// However, if you were asked to implement a square root function,
// you would not be expected to know these techniques.

// Implement a function which takes as input a floating point value and returns its square root.

export function squareRoot(x: number): number {
  // 1 2 3 4 5 6 7 8 9
  // l       m       r

  // default is x >= 1
  let left = 0;
  let right = x;

  if (x < 1) {
    left = x;
    right = 1;
  }

  while (left <= right) {
    let middle = left + (right - left) / 2;

    const squared = middle * middle;

    const comparingResult = compare(squared, x);

    if (comparingResult === Ordering.EQUAL) {
      return Number(middle.toFixed(2));
    }

    if (comparingResult === Ordering.GREATER) {
      right = middle;
    } else {
      left = middle;
    }
  }

  return -1;
}

enum Ordering { EQUAL, LESS, GREATER }

function compare(a: number, b: number): Ordering {
  const EQUAL_DEF = 0.0001;

  const diff = a - b;

  if (Math.abs(diff) <= EQUAL_DEF) return Ordering.EQUAL;

  return diff > 0 ? Ordering.GREATER : Ordering.LESS;
}
