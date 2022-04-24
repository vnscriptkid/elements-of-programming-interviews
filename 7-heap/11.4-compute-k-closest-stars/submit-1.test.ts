import { findClosestKStars, Star } from "./submit-1";

test("it works 1", () => {
  const star1 = new Star(1, 3);
  const star2 = new Star(-2, 2);
  expect(findClosestKStars(1, [star1, star2])).toEqual([star2]);
});

test("it works 2", () => {
  const star1 = new Star(3, 3);
  const star2 = new Star(5, -1);
  const star3 = new Star(-2, 4);
  expect(findClosestKStars(2, [star1, star2, star3])).toEqual([star3, star1]);
});
