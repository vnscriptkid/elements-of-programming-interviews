import { canReachEnd } from "./submit-1";

test("it works", () => {
  expect(canReachEnd([3, 3, 1, 0, 2, 0, 1])).toEqual(true);
  expect(canReachEnd([3, 2, 0, 0, 2, 0, 1])).toEqual(false);
});
