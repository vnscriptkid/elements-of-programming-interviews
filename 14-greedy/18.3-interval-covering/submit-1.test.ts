import { findMinimumVisits, Interval } from "./submit-1";

test("it works", () => {
  // [0,3],[2,6],[3,4],[6,9]
  const intervals = [
    new Interval(0, 3),
    new Interval(2, 6),
    new Interval(3, 4),
    new Interval(6, 9),
  ];

  expect(findMinimumVisits(intervals)).toEqual([3, 9]);
});
