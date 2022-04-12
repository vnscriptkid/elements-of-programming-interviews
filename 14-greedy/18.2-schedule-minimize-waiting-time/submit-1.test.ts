import { minimumTotalWaitingTime } from "./submit-1";

test("it works", () => {
  expect(minimumTotalWaitingTime([2, 5, 1, 3])).toBe(10);
});
