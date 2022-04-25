// COMPUTE THE INTEGER SQUARE ROOT

// Write a program which takes a nonnegative integer and returns the largest integer
// whose square is less than or equal to the given integer.
// For example, if the input is 16, return 4; if the input is 300, return 17, since 17^2 = 289 < 300 and 18^2 = 324 > 300.

export function squareRoot(k: number): number {
  let left = 0,
    right = k;

  while (left <= right) {
    let middle = ~~(left + (right - left) / 2);

    const temp = middle * middle;

    if (temp === k) return middle;

    if (temp > k) right = middle - 1;
    else left = middle + 1;
  }

  return left - 1;
}
