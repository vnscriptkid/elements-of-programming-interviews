import { minimumPathTotal } from "./submit-1";

test("it works", () => {
  expect(
    minimumPathTotal([[2], [4, 4], [8, 5, 6], [4, 2, 6, 2], [1, 5, 2, 3, 4]])
  ).toEqual(15);
});
