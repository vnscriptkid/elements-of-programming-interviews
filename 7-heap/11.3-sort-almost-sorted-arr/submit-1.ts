// SORT AN ALMOST-SORTED ARRAY

// Often data is almost-sorted—for example, a server receives timestamped stock quotes and earlier quotes
// may arrive slightly after later quotes because of differences in server loads and network routes.
// In this problem we address efficient ways to sort such data.

// Write a program which takes as input a very long sequence of numbers and prints the numbers in sorted order.
// Each number is at most k away from its correctly sorted position.
// (Such an array is sometimes referred to as being

// For example, no number in the sequence (3,-1,2,6,4,5,8} is more than 2 away from its final sorted position.
import { Heap } from "collections/heap";

export function sortApproximatelySortedData(sequence: number[], k: number) {
  // 3,-1,2,6,4,5,8
  // ^
  const minHeap = new Heap([], null, (a: number, b: number) => b - a);

  const result: number[] = [];

  for (let num of sequence) {
    minHeap.add(num);

    if (minHeap.length === k + 1) {
      result.push(minHeap.pop());
    }
  }

  while (minHeap.length) {
    result.push(minHeap.pop());
  }

  return result;
}
