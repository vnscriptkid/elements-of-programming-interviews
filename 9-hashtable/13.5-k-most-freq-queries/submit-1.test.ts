import { kMostFrequentQueries } from "./submit-1";

test("it works", () => {
  expect(
    kMostFrequentQueries(
      ["a", "e", "a", "b", "d", "d", "a", "e", "a", "d", "x", "y", "x"],
      2
    )
  ).toEqual(["a", "d"]);
});
