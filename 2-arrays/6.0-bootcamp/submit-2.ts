function swap(arr: number[], a: number, b: number) {
  [arr[b], arr[a]] = [arr[a], arr[b]];
}

export function oddEven(arr: number[]): number[] {
  let nextOddIdx = 0,
    nextEvenIdx = arr.length - 1;

  while (nextOddIdx < nextEvenIdx) {
    if (arr[nextOddIdx] % 2 === 1) {
      nextOddIdx++;
    } else {
      swap(arr, nextOddIdx, nextEvenIdx);
      nextEvenIdx--;
    }
  }

  return arr;
}
