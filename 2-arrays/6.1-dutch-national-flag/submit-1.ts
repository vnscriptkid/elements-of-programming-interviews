// Write a program that takes an array A and an index i into A,
// and rearranges the elements such that all elements less than A[i] (the "pivot") appear first,
// followed by elements equal to the pivot, followed by elements greater than the pivot.

// Generalizing, suppose A = (0,l,2,0,2,l,l),and the pivot index is 3.
// Then A[3] = 0, so (0,0,1,2,2,1,1) is a valid partitioning.
// For the same array, if the pivot index is 2, then A[2] = 2,
// so the arrays (0,1,0,1,1,2,2) as well as (0,0,1,1,1, 2,2) are valid partitionings.

function swap(list: number[], x: number, y: number) {
  [list[y], list[x]] = [list[x], list[y]];
}

export function dutchFlagPartition(pivotIndex: number, list: number[]) {
  const pivot = list[pivotIndex];

  let smaller = 0,
    greater = list.length - 1;

  let equal = 0;

  while (equal <= greater) {
    if (list[equal] === pivot) equal++;
    else if (list[equal] > pivot) swap(list, equal, greater--);
    else swap(list, equal++, smaller++);
  }
}
