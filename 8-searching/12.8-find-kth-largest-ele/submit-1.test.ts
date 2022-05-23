import { findKthLargest } from "./submit-1";

test("it works", () => {
  expect(findKthLargest([3, 1, 2, 5, 4], 1)).toBe(5);
  expect(findKthLargest([3, 1, 2, 5, 4], 2)).toBe(4);
  expect(findKthLargest([3, 1, 2, 5, 4], 3)).toBe(3);
  expect(findKthLargest([3, 1, 2, 5, 4], 4)).toBe(2);
});
