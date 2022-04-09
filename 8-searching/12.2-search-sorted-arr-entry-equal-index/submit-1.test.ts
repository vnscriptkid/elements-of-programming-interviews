import { searchEntryEqualToItsIndex } from "./submit-1";

test("it works", () => {
  // For example, when the input is (-2,0,2,3,6,7,9) your algorithm should return 2 or 3.
  expect(searchEntryEqualToItsIndex([-2, 0, 2, 3, 6, 7, 9])).toEqual(3);

  expect(searchEntryEqualToItsIndex([-2, 0, 2, 4, 6, 7, 9])).toEqual(2);
});
