import { deleteDuplicates } from "./submit-1";

test("it works", () => {
  const result = deleteDuplicates([2, 3, 5, 5, 7, 11, 11, 11, 13]);

  expect(result.slice(0, 6)).toEqual([2, 3, 5, 7, 11, 13]);
});
