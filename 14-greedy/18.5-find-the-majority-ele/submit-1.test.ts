import { majoritySearch } from "./submit-1";

test("it works", () => {
  expect(majoritySearch([1, 2, 1, 3, 4, 1, 1])).toEqual(1);
  expect(majoritySearch([1, 2, 1, 1, 4, 1])).toEqual(1);
});
