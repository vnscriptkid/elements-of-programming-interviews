// Write a program which takes as input two sorted arrays, and returns a new array containing elements that are present in both of the input arrays.
// The input arrays may have duplicate entries, but the returned array should be free of duplicates.
// For example, the input is (2,3,3,5,5,6,7,7,8,12} and (5,5,6,8,8,9,10,10), your output should be (5,6,8).

export function intersectTwoSortedArrays(
  arr1: number[],
  arr2: number[]
): number[] {
  const result: number[] = [];

  let p1 = 0,
    p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      // do sth
      result.push(arr1[p1]);
      // move both p1, p2 to next diff numbers
      p1++;
      p2++;
      while (arr1[p1] === arr1[p1 - 1] && p1 < arr1.length) p1++;
      while (arr2[p2] === arr2[p2 - 1] && p2 < arr2.length) p2++;
    } else if (arr1[p1] < arr2[p2]) {
      // move p1 to next diff numbers
      p1++;
      while (arr1[p1] === arr1[p1 - 1] && p1 < arr1.length) p1++;
    } else {
      // arr2[p2] < arr1[p1]
      p2++;
      while (arr2[p2] === arr2[p2 - 1] && p2 < arr2.length) p2++;
    }
  }

  return result;
}
