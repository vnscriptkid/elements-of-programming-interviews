5; // DELETE DUPLICATES FROM A SORTED ARRAY

// This problem is concerned with deleting repeated elements from a sorted array.
// For example, for the array (2,3,5,5,7,11,11,11,13), then after deletion, the array is (2,3,5,7,11,13,0,0,0).
// After deleting repeated elements, there are 6 valid entries.
// There are no requirements as to the values stored beyond the last valid element.

// Write a program which takes as input a sorted array and updates it so that
// all duplicates have been removed and the remaining elements have been shifted left to fill the emptied indices.
// Return the number of valid elements.
// Many languages have library functions for performing this operation—you cannot use these functions.

export function deleteDuplicates(list: number[]) {
  // 3 dups: { 5: 3, 11: 3 }
  // 2,3,5,5,7,11,11,11,13
  // 2 3 5 7 11 13 11 11 11 13
  //            $
  //                        ^
  // _ _ _ _ _  _  x  x  x  x
  let writeIdx = 1;

  for (let cur = 0; cur < list.length; cur++) {
    if (list[cur] !== list[writeIdx - 1]) {
      swap(list, cur, writeIdx);
      writeIdx++;
    }
  }

  return list;
}
function swap(list: number[], cur: number, writeIdx: number) {
  [list[writeIdx], list[cur]] = [list[cur], list[writeIdx]];
}
