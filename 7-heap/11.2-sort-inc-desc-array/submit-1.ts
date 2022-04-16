import { Heap } from "collections/heap";
// SORT AN INCREASING-DECREASING ARRAY

// An array is said to be fc-increasing-decreasing if
// elements repeatedly increase up to a certain index after which they decrease,
// then again increase, a total of k times.

//        0,   1    2    3    4    5    6    7   8     9
// INPUT: 57  131  493  294  221  339  418  452  442  190
//                                                         ^

// curDirection: DEC
// sublistStartIdx: 8

// [ [57, 131, 493], [294  221], [339  418  452], [442  190] ]

// (57,131,493),(221,294),(339,418,452),(190,442)

enum Direction {
  INC,
  DESC,
}

export function sortKIncreasingDecreasingArray(list: number[]): number[] {
  let curDirection: Direction = Direction.INC;

  let sublistStartIdx = 0;

  const sortedSublists = [];

  for (let i = 1; i < list.length; i++) {
    // list[i] > list[i - 1] && curDirection === INC => move on
    // list[i] < list[i - 1] && curDirection === DEC => move on
    // list[i] > list[i - 1]  && curDirection === DEC => end desc sublist at i - 1, flip direction
    // list[i] < list[i - 1]  && curDirection === INC => end inc sublist at i - 1, flip direction
    const endIncSublist =
      curDirection === Direction.INC && list[i] < list[i - 1];
    const endDescSublist =
      curDirection === Direction.DESC && list[i] > list[i - 1];

    if (endIncSublist || endDescSublist) {
      const sublist = list.slice(sublistStartIdx, i);

      if (endDescSublist) sublist.sort((a, b) => a - b);

      sortedSublists.push(sublist);
      curDirection = Direction.DESC;
      sublistStartIdx = i;
    }
  }

  // add lastsublist
  const sublist = list.slice(sublistStartIdx);
  if (curDirection === Direction.DESC) sublist.sort((a, b) => a - b);
  sortedSublists.push(sublist);

  return mergeSortedSublists(sortedSublists);
}
function mergeSortedSublists(sortedSublists: number[][]): number[] {
  // Item: [ value, arrIdx, itemIdx ]
  const minHeap = new Heap([], null, (a: any, b: any) => b[0] - a[0]);

  // init minHeap
  for (let i = 0; i < sortedSublists.length; i++) {
    const sublist = sortedSublists[i];
    minHeap.add([sublist[0], i, 0]);
  }

  const result: number[] = [];

  while (minHeap.length > 0) {
    const [value, arrIdx, itemIdx] = minHeap.pop();

    result.push(value);

    const curSublist = sortedSublists[arrIdx];

    if (itemIdx + 1 < curSublist.length) {
      minHeap.add([curSublist[itemIdx + 1], arrIdx, itemIdx + 1]);
    }
  }

  return result;
}
