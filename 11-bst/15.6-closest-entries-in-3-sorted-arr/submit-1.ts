// FIND THE CLOSEST ENTRIES IN THREE SORTED ARRAYS

// Design an algorithm that takes three sorted arrays and returns one entry
// from each such that the minimum interval containing these three entries is as small as possible.
// For example, if the three arrays are (5,10,15), (3,6,9,12,15), and (8,16,24),
// then 15,15,16 he in the smallest possible interval.
import { Heap } from "collections/heap";

class Entry {
  value: number;
  arrIdx: number;
  numIdx: number;

  constructor(value: number, arrIdx: number, numIdx: number) {
    this.value = value;
    this.arrIdx = arrIdx;
    this.numIdx = numIdx;
  }
}

export function findMinDistanceSortedArrays(sortedArrays: number[][]): number {
  // 5 10 15 (A)
  //   ^
  // 3 6 9 12 15 (B)
  //   ^
  // 8 16 24 (C)
  // ^

  const minHeap = new Heap([], null, (a: Entry, b: Entry) => b.value - a.value);

  let maxValue = -Infinity;

  sortedArrays.forEach((arr, idx) => {
    const entry = new Entry(arr[0], idx, 0);
    minHeap.add(entry);
    maxValue = Math.max(maxValue, entry.value);
  });

  let globalMinDistance = Infinity;

  while (minHeap.length === 3) {
    globalMinDistance = Math.min(
      globalMinDistance,
      maxValue - minHeap.peek().value
    );

    const { arrIdx, numIdx } = minHeap.pop();

    const curArr = sortedArrays[arrIdx];

    if (numIdx + 1 < curArr.length) {
      minHeap.add(new Entry(curArr[numIdx + 1], arrIdx, numIdx + 1));

      maxValue = Math.max(maxValue, curArr[numIdx + 1]);
    }
  }

  return globalMinDistance;
}
