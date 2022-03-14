// 1, 9, 3, 5, 2, 8, 6
//             ^$
//             #

function swap(arr: number[], x: number, y: number) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

export function oddEven(arr: number[]): number[] {
  let oddBoundary = 0;
  let evenBoundary = arr.length - 1;

  let cur = 0;

  while (oddBoundary < evenBoundary) {
    if (arr[cur] % 2 === 0) {
      // even
      swap(arr, cur, evenBoundary);
      evenBoundary--;
    } else {
      // odd
      swap(arr, cur, oddBoundary);
      oddBoundary++;
      cur++;
    }
  }

  return arr;
}
