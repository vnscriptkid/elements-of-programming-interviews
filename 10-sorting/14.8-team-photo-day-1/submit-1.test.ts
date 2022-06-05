import { Team } from "./submit-1";

test("it works", () => {
  expect(
    Team.validPlacementExists(new Team([2, 3, 4]), new Team([1, 2, 3]))
  ).toEqual(true);

  expect(
    Team.validPlacementExists(new Team([2, 3, 3]), new Team([1, 2, 3]))
  ).toEqual(false);

  expect(
    Team.validPlacementExists(new Team([2, 3, 4]), new Team([1, 3, 3]))
  ).toEqual(false);
});
