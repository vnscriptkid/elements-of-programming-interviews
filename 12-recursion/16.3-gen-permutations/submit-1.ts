// This problem is concerned with computing all permutations of an array.
// For example, if the array is (2,3,5,7} one output could be
// (2,3,5,7),(2,3,7,5),(2,5,3,7),(2,5,7,3), <2,7,3,5>, <2,7,5,3>, <3,2,5,7>,
// <3,2,7,5>, <3,5,2,7>, <3,5,7,2>, <3,7,2,5>, <3,7,5,2>, <5,2,3,7>,
// (5,2,7,3}, <5,3,2,7>, <5,3,7,2>, <5,7,2,3>, <5,7,2,3>, <7,2,3,5>,
// <7,2,5,3>, <7,3,2,5),<7,3,5,2),<7,5,2,3),<7,5,3,2).

// (Any other ordering is acceptable too.)

// GENERATE PERMUTATIONS

// Write a program which takes as input an array of distinct integers
// and generates all permutations of that array.
// No permutation of the array may appear more than once.

export function permutations(
  list: number[],
  curPer: number[] = [],
  result: number[][] = []
) {
  if (list.length === 0) {
    result.push([...curPer]);
    return;
  }

  for (let i = 0; i < list.length; i++) {
    let chosenNum = list[i];

    curPer.push(chosenNum);
    const newList = list.filter((x, idx) => idx !== i);
    permutations(newList, curPer, result);
    curPer.pop();
  }

  return result;
}
