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

export class HeapEntry {
  index: number;
  value: number;

  constructor(index: number, value: number) {
    this.index = index;
    this.value = value;
  }
}

export function kLargestInBinaryHeap(list: number[], k: number) {}

//  0   1   2   3   4   5   6   7   8
// 561 314 401 28 156 359  271  11  3

//         561
//         /  \
//       314   401
//      / \     / \
//     28 156  359 271
//    / \
//   11  3
