import { levenshteinDistance } from "./submit-1";

test("it works", () => {
  expect(levenshteinDistance("Saturday", "Sundays")).toBe(4);
});
