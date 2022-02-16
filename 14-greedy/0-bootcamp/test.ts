import { makeChange } from "./submit-1";

test("make change", () => {
  expect(makeChange(48)).toBe(3);
});
