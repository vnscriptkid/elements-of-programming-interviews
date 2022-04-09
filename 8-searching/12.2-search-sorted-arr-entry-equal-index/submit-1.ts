// SEARCH A SORTED ARRAY FOR ENTRY EQUAL TO ITS INDEX

// Design an efficient algorithm that takes a sorted array of distinct integers,
// and returns an index i such that the element at index i equals i.
// For example, when the input is (-2,0,2,3,6,7,9) your algorithm should return 2 or 3.

//  0  1  2  3  4  5  6
// -2, 0, 2, 4, 6, 7, 9]
// #         ^        $

export function searchEntryEqualToItsIndex(list: number[]): number {
  let left = 0,
    right = list.length - 1;

  while (left <= right) {
    let middle = ~~(left + (right - left) / 2);

    if (list[middle] === middle) return middle;

    if (list[middle] > middle) {
      // search on the left
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
