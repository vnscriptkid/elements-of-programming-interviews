// FIND THE kth LARGEST ELEMENT

// Many algorithms require as a subroutine the computation of the kth largest element of an array.
// The first largest element is simply the largest element.
// The nth largest element is the smallest element, where n is the length of the array.

// Forexample,if theinputarrayA=(3,2,1,5,4),thenA[3]isthefirstlargestelement in A, A[0]
// is the third largest element in A, and A[ 2] is the fifth largest element in A.

// Design an algorithm for computing the kth largest element in an array. Assume entries are distinct.

export function findKthLargest(list: number[], k: number) {
  return findKthLargestHelper(list, k, 0, list.length - 1);
}

function findKthLargestHelper(
  list: number[],
  k: number,
  fromIdx: number,
  toIdx: number
): number {
  // [ 3, 1, 2, 5, 4 ], k = 2
  // [ 1, 2, 3, 5, 4 ], k = 2
  const randomIdx = random(fromIdx, toIdx);

  const correctIdxOfTarget = partition(list, randomIdx, fromIdx, toIdx);

  if (k - 1 === correctIdxOfTarget) {
    return list[correctIdxOfTarget];
  } else if (k - 1 > correctIdxOfTarget) {
    return findKthLargestHelper(list, k, correctIdxOfTarget + 1, toIdx);
  } else {
    return findKthLargestHelper(list, k, fromIdx, correctIdxOfTarget - 1);
  }
}
function random(fromIdx: number, toIdx: number): number {
  return Math.floor(Math.random() * (toIdx - fromIdx + 1)) + fromIdx;
}

function partition(
  list: number[],
  targetIdx: number,
  fromIdx: number,
  toIdx: number
): number {
  swap(list, targetIdx, fromIdx);

  let lastLargerIdx = fromIdx;

  // 5,4,3,2,1
  //           ^
  //       $

  for (let i = fromIdx + 1; i <= toIdx; i++) {
    if (list[i] >= list[fromIdx]) {
      swap(list, i, ++lastLargerIdx);
    }
  }

  swap(list, lastLargerIdx, fromIdx);

  return lastLargerIdx;
}
function swap(list: number[], x: number, y: number) {
  [list[x], list[y]] = [list[y], list[x]];
}

findKthLargest([3, 1, 2, 5, 4], 2);
