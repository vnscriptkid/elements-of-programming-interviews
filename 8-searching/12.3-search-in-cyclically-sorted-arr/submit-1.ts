// SEARCH A CYCLICALLY SORTED ARRAY

// An array is said to be cyclically sorted if it is possible to cyclically shift its entries
// so that it becomes sorted.

// Design an O(logn) algorithm for finding the position of the smallest element in a cyclically sorted array.
// Assume all elements are distinct.
// For example, for the array in Figure 12.2 on the next page, your algorithm should return 4.

export function searchSmallest(list: number[]) {
  // [378, 478, 550, 631, 103, 203, 220, 234, 279, 368]
  //  @                    ^                        $
  let left = 0,
    right = list.length - 1;

  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2);

    if (list[middle] > list[right]) left = middle + 1;
    else right = middle;
  }

  return left;
}
