import { onlineMedian } from "./submit-1";

test("it works", () => {
  expect(onlineMedian([1, 0, 3, 5, 2, 0, 1])).toEqual([
    1, 0.5, 1, 2, 2, 1.5, 1,
  ]);
});
