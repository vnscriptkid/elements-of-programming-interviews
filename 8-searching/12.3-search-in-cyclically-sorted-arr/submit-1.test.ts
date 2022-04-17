import { searchSmallest } from "./submit-1";

test("it works", () => {
  expect(
    searchSmallest([378, 478, 550, 631, 103, 203, 220, 234, 279, 368])
  ).toEqual(4);
});
