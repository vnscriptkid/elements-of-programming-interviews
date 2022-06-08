import { applyPermutation } from "./submit-1";

test("it works", () => {
  const arr = ["a", "b", "c", "d"];
  applyPermutation([2, 0, 1, 3], arr);
  expect(arr).toEqual(["b", "c", "a", "d"]);
});
