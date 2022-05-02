// COMPUTE THE MEDIAN OF ONLINE DATA

import { Heap } from "collections/heap";
// You want to compute the running median of a sequence of numbers.
// The sequence is presented to you in a streaming fashion—
// you cannot back up to read an earlier value,
// and you need to output the median after reading in each new element.

// For example, if the input is 1,0,3,5,2,0,1 the output is 1,0.5,1,2,2,1.5,1.

// Design an algorithm for computing the running median of a sequence.

const DEFAULT_INITIAL_CAPACITY = 16;

export function onlineMedian(sequence: number[]) {
  //   1, 0, 3, 5, 2, 0, 1
  //                     ^
  // left: 0, 1, 0, 1
  // right: 3, 5, 2
  // medians: [1, 0.5, 1, 2, 2, 1.5, 1]

  // if: num <= left.peek() => left.add(num)
  // else: right.add(num);
  const left = new Heap([], null, (a: number, b: number) => a - b); // maxHeap
  const right = new Heap([], null, (a: number, b: number) => b - a); // minHeap

  const medians: number[] = [];

  for (let num of sequence) {
    if (left.length === 0 || num <= left.peek()) {
      left.add(num);
    } else {
      right.add(num);
    }

    reBalance(left, right);

    medians.push(getMedian(left, right));
  }

  return medians;
}
function reBalance(left: any, right: any): void {
  if (Math.abs(left.length - right.length) <= 1) return;

  if (left.length > right.length) {
    right.add(left.pop());
  } else {
    left.add(right.pop());
  }
}
function getMedian(left: any, right: any): number {
  if (left.length === right.length) return (left.peek() + right.peek()) / 2;

  return left.length > right.length ? left.peek() : right.peek();
}
