// INCREMENT AN ARBITRARY-PRECISION INTEGER

// Write a program which takes as input an array of digits encoding a decimal number D and updates the array to represent the number D + 1.
// For example, if the input is (1,2,9) then you should update the array to (1,3,0).
// Your algorithm should work even if it is implemented in a language that has finite-precision arithmetic.

// [1, 9, 9]

export function plusOne(arr: number[]): number[] {
  arr[arr.length - 1] += 1;

  for (let i = arr.length - 1; i > 0 && arr[i] === 10; i--) {
    arr[i] = 0;
    arr[i - 1] += 1;
  }

  if (arr[0] === 10) {
    arr[0] = 0;
    arr.unshift(1);
  }

  return arr;
}
