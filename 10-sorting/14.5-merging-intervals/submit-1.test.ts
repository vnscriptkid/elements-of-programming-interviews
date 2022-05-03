import { addInterval, Interval } from "./submit-1";

test("it works", () => {
  expect(
    addInterval(
      [
        new Interval(-4, -1),
        new Interval(0, 2),
        new Interval(3, 6),
        new Interval(7, 9),
        new Interval(11, 12),
        new Interval(14, 17),
      ],
      new Interval(1, 8)
    )
  ).toEqual([
    new Interval(-4, -1),
    new Interval(0, 9),
    new Interval(11, 12),
    new Interval(14, 17),
  ]);
});
