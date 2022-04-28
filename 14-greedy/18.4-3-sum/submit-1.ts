// THE 3-SUM PROBLEM

// Design an algorithm that takes as input an array and a number,
// and determines if there are three entries in the array (not necessarily distinct) which add up to the specified number.
// For example, if the array is (11,2,5,7,3) then there are three entries in the array
// which add up to 21 (3,7,11 and 5,5,11).
// (Note that we can use 5 twice, since the problem statement said we can use the same entry more than once.)
// However, no three entries add up to 22.

export function hasThreeSum(list: number[], target: number) {
  // 11, 2, 5, 7, 3
  // 2,  3, 5, 7, 11
  //     @     #   $

  // curSum: 21
  // target: 21

  //       n-1
  // x  y  z

  for (let first = 0; first <= list.length - 3; first++) {
    let second = first + 1,
      third = list.length - 1;

    let curSum = 0;
    while (second <= third) {
      curSum = list[first] + list[second] + list[third];

      if (curSum === target) return true;

      if (curSum < target) second++;
      else third--;
    }
  }

  return false;
}
