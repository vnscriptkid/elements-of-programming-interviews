import { Interval, unionOfIntervals } from "./submit-1";

test("it works", () => {
  const result = unionOfIntervals([
    new Interval(2, 4),
    new Interval(8, 11),
    new Interval(13, 15),
    new Interval(16, 17),
    new Interval(1, 1),
    new Interval(3, 4),
    new Interval(7, 8),
    new Interval(12, 16),
    new Interval(0, 3),
    new Interval(5, 7),
    new Interval(9, 11),
    new Interval(12, 14),
  ]);

  expect(result).toEqual([
    new Interval(0, 4),
    new Interval(5, 11),
    new Interval(12, 17),
  ]);
});
