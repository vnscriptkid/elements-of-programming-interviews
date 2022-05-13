import { kLargestInBinaryHeap } from "./submit-1";

test("it works", () => {
  expect(
    kLargestInBinaryHeap([561, 314, 401, 28, 156, 359, 271, 11, 3], 4)
  ).toEqual([561, 401, 359, 314]);
});
