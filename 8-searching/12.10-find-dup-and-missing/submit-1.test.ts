import { findDuplicateMissing } from "./submit-1";

test("it works", () => {
  expect(findDuplicateMissing([2, 5, 3, 4, 3, 0])).toEqual({
    duplicate: 3,
    missing: 1,
  });
});
