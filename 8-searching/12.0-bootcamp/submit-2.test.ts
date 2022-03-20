import { bsearch } from "./submit-2";

test("bsearch", () => {
  expect(bsearch([1, 2, 5, 6, 8, 9], 2)).toBe(1);
  expect(bsearch([1, 2, 5, 6, 8, 9], 8)).toBe(4);
  expect(bsearch([1, 2, 5, 6, 8, 9], 7)).toBe(-1);
});
