import { sortApproximatelySortedData } from "./submit-1";

test("it works", () => {
  expect(sortApproximatelySortedData([3, -1, 2, 6, 4, 5, 8], 2)).toEqual([
    -1, 2, 3, 4, 5, 6, 8,
  ]);
});
