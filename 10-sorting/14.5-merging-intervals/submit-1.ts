// MERGING INTERVALS

// Suppose the time during the day that a person is busy is stored as a set of disjoint time intervals.
// If an event is added to the person's calendar, the set of busy times may need to be updated.

// In the abstract, we want a way to add an interval to a set of disjoint intervals
// and represent the new set as a set of disjoint intervals.

// For example, if the initial set of intervals is [-4,-1],[0,2],[3,6],[7,9],[11,12],[14,17],
// and the added interval is [1,8], the result is [-4,-1],[0,9],[11,12],[14,17].

// Write a program which takes as input an array of disjoint closed intervals with integer endpoints,
// sorted by increasing order of left endpoint, and an interval to be added,
// and returns the union of the intervals in the array and the added interval.
// Your result should be expressed as a union of disjoint intervals sorted by left endpoint.

export class Interval {
  left: number;
  right: number;

  constructor(left: number, right: number) {
    this.left = left;
    this.right = right;
  }

  overlaps(other: Interval) {
    //   [   ]
    //     {  }
    if (this.left >= other.left && this.left <= other.right) return true;
    //    [   ]
    //  {  }
    if (this.right <= other.right && this.right >= other.left) return true;
    //   [     ]
    //     { }

    //    [ ]
    //  {     }
    return this.left <= other.left && this.right >= other.right;
  }

  merge(other: Interval): Interval {
    const newLeft = Math.min(this.left, other.left);
    const newRight = Math.max(this.right, other.right);
    return new Interval(newLeft, newRight);
  }

  static clone(interval: Interval): Interval {
    return new Interval(interval.left, interval.right);
  }
}

// -4 -3 -2 -1  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17
// [         ]  [     ]  [        ]  [     ]    [   ]    [         ]
//       $
//                 ^
//                 {                    }

// prev: [-4,-1]
// cur [0,2]
// merged: [0, 9]
export function addInterval(
  disjointlntervals: Interval[],
  newInterval: Interval
) {
  const result: Interval[] = [];

  let i = 0;

  while (
    i < disjointlntervals.length &&
    !disjointlntervals[i].overlaps(newInterval)
  ) {
    result.push(Interval.clone(disjointlntervals[i++]));
  }

  let mergedInterval: Interval = Interval.clone(newInterval);

  while (
    i < disjointlntervals.length &&
    disjointlntervals[i].overlaps(mergedInterval)
  ) {
    mergedInterval = disjointlntervals[i++].merge(mergedInterval);
  }

  result.push(mergedInterval);

  while (i < disjointlntervals.length) {
    result.push(Interval.clone(disjointlntervals[i++]));
  }

  return result;
}
