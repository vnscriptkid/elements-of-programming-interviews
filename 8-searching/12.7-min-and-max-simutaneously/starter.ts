// FIND THE MIN AND MAX SIMULTANEOUSLY

// Given an array of comparable objects, you can find either the min or the max of the elements
// in the array with n - 1 comparisons, where n is the length of the array.

// Comparing elements may be expensive, e.g., a comparison may involve a number of nested calls
// or the elements being compared may be long strings.
// Therefore, it is natural to ask if both the min and the max can be computed
// with less than the 2(n - 1) comparisons required to compute the min and the max independently.

// Design an algorithm to find the min and max elements in an array. For example,
// if A =(3,2,5,1,2,4), youshould return1for the min and 5for the max.

// Hint: Use the fact that a < b and b < c implies a < c
// to reduce the number of compares used by the brute-force approach.

class MinMax {
  min: number;
  max: number;

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  static minMax(a: number, b: number): MinMax {
    return b < a ? new MinMax(b, a) : new MinMax(a, b);
  }
}

function findMinMax(list: number[]): MinMax {
  return new MinMax(1, 2);
}
