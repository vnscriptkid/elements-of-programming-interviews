import { optimumTaskAssignment } from "./submit-1";

test("it works 1", () => {
  // For example, if the durations are 5, 2, 1, 6, 4, 4, then on sorting we get 1, 2, 4, 4, 5, 6, and the pairings are (1,6), (2,5), and (4,4).
  expect(optimumTaskAssignment([5, 2, 1, 6, 4, 4])).toEqual([
    [1, 6],
    [2, 5],
    [4, 4],
  ]);
});
