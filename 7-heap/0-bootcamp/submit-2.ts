// Suppose you were asked to write a program which takes a sequence of strings presented in "streaming" fashion: you cannot back up to read an earlier value.
// Your program must compute the k longest strings in the sequence. All that is required is the k longest strings—it is not required to order these strings.

import { Heap } from "collections/heap";

export function findTopK(k: number, iter: Iterable<string>) {
  const minHeap = new Heap([], null, (a: any, b: any) => b[1] - a[1]);

  for (let str of iter) {
    minHeap.add([str, str.length]);

    if (minHeap.length === k + 1) minHeap.pop();
  }

  return minHeap.content.map((x: any) => x[0]);
}

export function findTopKBetter(k: number, iter: Iterable<string>) {
  const minHeap = new Heap([], null, (a: any, b: any) => b[1] - a[1]);

  for (let str of iter) {
    if (minHeap.length < k) minHeap.add([str, str.length]);
    else {
      if (str.length > minHeap.peek()[1]) {
        minHeap.pop();
        minHeap.add([str, str.length]);
      }
    }
  }

  return minHeap.content.map((x: any) => x[0]);
}
