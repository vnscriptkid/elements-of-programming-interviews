import { findNearestRepetition } from "./submit-1";

test("it works", () => {
  const result = findNearestRepetition([
    "All",
    "work",
    "and",
    "no",
    "play",
    "makes",
    "for",
    "no",
    "work",
    "no",
    "fun",
    "and",
    "no",
    "results",
  ]);

  expect(result).toBe(2);
});
