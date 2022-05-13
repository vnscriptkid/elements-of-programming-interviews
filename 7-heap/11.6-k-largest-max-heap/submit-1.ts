// COMPUTE THE k LARGEST ELEMENTS IN A MAX-HEAP

// A heap contains limited information about the ordering of elements,
// so unlike a sorted array or a balanced BST,
// naive algorithms for computing the k largest elements have a time complexity that
// depends linearly on the number of elements in the collection.

// Given a max-heap, represented as an array A,
// design an algorithm that computes the k largest elements stored in the max-heap.

// You cannot modify the heap. For example, if the heap is the one shown in Figure11.1(a) on Page175,
// then the array representation is (561,314,401,28,156,359,271,11,3),
// the four largest elements are 561,314,401,and 359.
import { Heap } from "collections/heap";

export class HeapEntry {
  index: number;
  value: number;

  constructor(index: number, value: number) {
    this.index = index;
    this.value = value;
  }
}

export function kLargestInBinaryHeap(list: number[], k: number): number[] {
  const result: number[] = [];

  const maxHeap = new Heap(
    [],
    null,
    (a: HeapEntry, b: HeapEntry) => a.value - b.value
  );

  maxHeap.add(new HeapEntry(0, list[0]));

  while (result.length < k || maxHeap.length === 0) {
    const entry = maxHeap.pop() as HeapEntry;

    result.push(entry.value);

    const leftChildIdx = entry.index * 2 + 1;
    const rightChildIdx = entry.index * 2 + 2;

    if (leftChildIdx < list.length)
      maxHeap.push(new HeapEntry(leftChildIdx, list[leftChildIdx]));
    if (rightChildIdx < list.length)
      maxHeap.push(new HeapEntry(rightChildIdx, list[rightChildIdx]));
  }

  return result;
}

//  0   1   2   3   4   5   6   7   8
// 561 314 401 28 156 359  271  11  3

//         561
//         /  \
//       314   401
//      / \     / \
//     28 156  359 271
//    / \
//   11  3

// result: [561,401,359]

// maxHeap: [(1,314), (5,359), (6,271)]

// i (0->3): 0
