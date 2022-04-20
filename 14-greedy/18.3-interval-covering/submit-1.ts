// THE INTERVAL COVERING PROBLEM

// Consider a foreman responsible for a number of tasks on the factory floor.
// Each task starts at a fixed time and ends at a fixed time.
// The foreman wants to visit the floor to check on the tasks.
// Your job is to help him minimize the number of visits he makes.
// In each visit, he can check on all the tasks taking place at the time of the visit.
// A visit takes place at a fixed time, and he can only check on tasks taking place at exactly that time.

// For example, if there are tasks at times [0,3],[2,6],[3,4],[6,9],
// then visit times 0,2,3,6 cover all tasks.
// A smaller set of visit times that also cover all tasks is 3,6.
// In the abstract, you are to solve the following problem.

// You are given a set of closed intervals.
// Design an efficient algorithm for finding a minimum sized set of numbers that covers all the intervals.

// 0 1 2 3 4 5 6 7 8 9
// [     ]
//       [ ]
//     [       ]
//             [     ]

export class Interval {
  start: number;
  end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  includes(point: number) {
    return point >= this.start && point <= this.end;
  }
}

export function findMinimumVisits(intervals: Interval[]): number[] {
  // sort intervals by end time in ascending order
  intervals.sort((a, b) => a.end - b.end);

  let endsEarliest = intervals[0];

  const result: number[] = [];

  result.push(endsEarliest.end);

  for (let i = 1; i < intervals.length; i++) {
    let curInterval = intervals[i];

    if (!curInterval.includes(endsEarliest.end)) {
      result.push(curInterval.end);
    }
  }

  return result.sort();
}
