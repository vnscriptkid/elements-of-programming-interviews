// COMPUTE THE UNION OF INTERVALS

// In this problem we consider sets of intervals with integer endpoints;
// the intervals may be open or closed at either end.
// We want to compute the union of the intervals in such sets. A concrete example is given in Figure 14.2.

// Design an algorithm that takes as input a set of intervals, and outputs their union
// expressed as a set of disjoint intervals.

export class Interval {
  left: number;
  right: number;

  constructor(left: number, right: number) {
    this.left = left;
    this.right = right;
  }
}

// 0  1  2  3  4  5  6  7  8  9 10
// [        ]     [     ]     [  ]
//       [     ]  [  ][       ]

export function unionOfIntervals(intervals: Interval[]) {}
