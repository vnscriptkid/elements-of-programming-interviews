import { swapBits } from "./submit-1";

test("it works", () => {
  // 1 0 1 0 0 (20)
  // ^     $
  // 0 0 1 1 0
  expect(swapBits(20, 1, 4)).toBe(6);
  expect(swapBits(20, 2, 4)).toBe(20);
});
