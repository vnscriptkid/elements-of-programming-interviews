// MERGE TWO SORTED ARRAYS

// Suppose you are given two sorted arrays of integers. If one array has enough empty entries at its end,
// it can be used to store the combined entries of the two arrays in sorted order.
// For example, consider (5,13,17,_,_,_,_,_) and (3,7,11,19), where _ denotes an empty entry.
// Then the combined sorted entries can be stored in the first array as(3,5,7,11,13,17,19,_).

// Write a program which takes as input two sorted arrays of integers,
// and updates the first to the combined entries of the two arrays in sorted order.
// Assume the first array has enough empty entries at its end to hold the result.

export function mergeTwoSortedArrays(
  listA: number[],
  m: number,
  listB: number[],
  n: number
) {
  let nextIdx = m + n - 1;

  let i = m - 1,
    j = n - 1;

  while (i >= 0 && j >= 0) {
    listA[i] > listB[j]
      ? (listA[nextIdx--] = listA[i--])
      : (listA[nextIdx--] = listB[j--]);
  }

  while (i >= 0) listA[nextIdx--] = listA[i--];

  while (j >= 0) listA[nextIdx--] = listB[j--];

  return listA;
}
