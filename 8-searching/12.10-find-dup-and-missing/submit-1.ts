// FIND THE DUPLICATE AND MISSING ELEMENTS

// If an array contains n — 1 integers, each between 0 and n —1, inclusive,
// and all numbers in the array are distinct,
// then it must be the case that exactly one number between 0 and n-1 is absent.

// We can determine the missing number in 0(n) time and 0(1) space
// by computing the sum of the elements in the array.
// Since the sum of all the numbers from 0 to n - 1, inclusive, is <"~1>",
// we can subtract the sum of the numbers in the array from <"~1>" to get the missing number.
// For example,if the array is(5,3,0,1,2), then n =6. We subtract(5+3+0+1+2) =11 from =15,
// and the result, 4, is the missing number.

// Similarly,ifthearraycontainsn+1integers,eachbetween0andn— 1,inclusive,
// with exactly one element appearing twice,
// the duplicated integer will be equal to the sum of the elements of the array minus <"~21>".

// Alternatively, for the first problem, we can compute the missing number by
// computing the XOR of all the integers from 0 to n- 1, inclusive,
// and XORing that with the XOR of all the elements in the array.
// Every element in the array, except for the missing element,
// cancels out with an integer from the first set.
// Therefore, the resulting XOR equals the missing element.
// The same approach works for the problem of finding the duplicated element.
// For example, the array (5,3,0,1,2} represented in binary is
// <(101)2, (011)2, (000)2, (001)2, (010)2>.
// The XOR of these entries is (101)2. The XOR of all numbers from 0 to 5, inclusive, is (001)2.
// The XOR of (101)2 and (001)2 is (100)2 = 4, which is the missing number.

// We now turn to a related, though harder, problem.

// You are given an array of n integers, each between 0 and n - 1, inclusive.
// Exactly one element appears twice, implying that exactly one number
// between 0 and n - 1 is missing from the array.
// How would you compute the duplicate and missing numbers?

class DuplicateAndMissing {
  duplicate: number;
  missing: number;

  constructor(duplicate: number, missing: number) {
    this.duplicate = duplicate;
    this.missing = missing;
  }
}

export function findDuplicateMissing(list: number[]): DuplicateAndMissing {
  // 0  1  2  3  4  5

  // 2, 5, 3, 4, 3, 0
  // 0, 3, 2, 3, 4, 5
  //                ^

  // first round: bring num back to it's correct pos (num x at idx x)
  let i = 0;
  while (i < list.length) {
    let curNum = list[i];

    if (curNum !== i && list[curNum] !== curNum) {
      swap(list, i, curNum);
    } else {
      i++;
    }
  }

  // second round: find number at false pos
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== i) {
      return new DuplicateAndMissing(list[i], i);
    }
  }

  return new DuplicateAndMissing(-1, -1);
}
function swap(list: number[], i: number, j: number) {
  [list[j], list[i]] = [list[i], list[j]];
}
