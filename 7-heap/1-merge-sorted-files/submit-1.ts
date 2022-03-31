// Write a program that takes as input a set of sorted sequences and computes the union of these sequences as a sorted sequence.
// For example, if the input is (3, 5, 7), (0, 6), and (0, 6, 28), then the output is (0, 0, 3, 5, 6, 6, 7, 28).

const Heap = require("collections/heap");

class Item {
  arrIdx: number;
  idx: number;
  value: number;

  constructor(value: number, arrIdx: number, idx: number) {
    this.value = value;
    this.arrIdx = arrIdx;
    this.idx = idx;
  }
}

export function mergeSortedArr(list: number[][]): number[] {
  const minHeap = new Heap([], null, (a: Item, b: Item) => b.value - a.value);

  // init min heap
  for (let i = 0; i < list.length; i++) {
    minHeap.add(new Item(list[i][0], i, 0));
  }

  const result: number[] = [];

  while (minHeap.length > 0) {
    const itemOut = minHeap.pop();

    result.push(itemOut.value);

    const curArrIdx = itemOut.arrIdx;
    const nextIdx = itemOut.idx + 1;

    if (nextIdx < list[curArrIdx].length) {
      minHeap.add(new Item(list[curArrIdx][nextIdx], curArrIdx, nextIdx));
    }
  }

  return result;
}
