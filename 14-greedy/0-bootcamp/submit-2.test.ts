import { makeChange } from "./submit-2";

test("make change", () => {
  expect(makeChange(48)).toBe(3);
});
