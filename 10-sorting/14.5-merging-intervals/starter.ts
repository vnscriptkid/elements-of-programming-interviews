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
}

export function addInterval(
  disjointlntervals: Interval[],
  newlnterval: Interval
) {}
