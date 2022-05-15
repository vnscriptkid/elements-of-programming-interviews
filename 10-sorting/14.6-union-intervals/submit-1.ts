// COMPUTE THE UNION OF INTERVALS

// In this problem we consider sets of intervals with integer endpoints;
// the intervals may be open or closed at either end.
// We want to compute the union of the intervals in such sets. A concrete example is given in Figure 14.2.

// Design an algorithm that takes as input a set of intervals, and outputs their union
// expressed as a set of disjoint intervals.

export class Interval {
  startTime: number;
  endTime: number;

  constructor(startTime: number, endTime: number) {
    this.startTime = startTime;
    this.endTime = endTime;
  }

  overlaps(other: Interval) {
    // this: [    ]
    // other    {   }
    if (other.startTime >= this.startTime && other.startTime <= this.endTime)
      return true;

    // this:    [    ]
    // other: {   }
    if (other.endTime <= this.endTime && other.endTime >= this.startTime)
      return true;

    // this:  [      ]
    // other:    { }

    // this:    [ ]
    // other: {     }
    if (other.startTime <= this.startTime && other.endTime >= this.endTime)
      return true;

    return false;
  }

  merge(other: Interval) {
    this.startTime = Math.min(this.startTime, other.startTime);
    this.endTime = Math.max(this.endTime, other.endTime);
  }
}

// 0  1  2  3  4  5  6  7  8  9 10
// [        ]     [     ]     [  ]
//       [     ]  [  ][       ]

export function unionOfIntervals(intervals: Interval[]) {
  // sort intervals by startTime in ascending order
  intervals.sort((a, b) => a.startTime - b.startTime);

  let prevInterval = intervals[0];
  const result: Interval[] = [];

  for (let i = 1; i < intervals.length; ++i) {
    const curInterval = intervals[i];

    if (curInterval.overlaps(prevInterval)) {
      prevInterval.merge(curInterval);
    } else {
      result.push(prevInterval);
      prevInterval = curInterval;
    }
  }

  result.push(prevInterval);

  return result;
  // keep a prevInterval as the union of intervals before current one
  // (1) if cur does not overlap with prev, we're done with one union, store it in result
  // (2) if cur overlaps with prev, merge cur and prev into prev
  // quit the loop, store the prev
}
