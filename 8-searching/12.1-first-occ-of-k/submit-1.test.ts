import { searchFirstK } from "./submit-1";

test("search 1", () => {
  const arr = [-14, -10, 2, 108, 108, 243, 285, 285, 285, 401];

  expect(searchFirstK(arr, 108)).toEqual(3);
  expect(searchFirstK(arr, 285)).toEqual(6);
});
