import { decomposeIntoDictionaryWords } from "./submit-1";

test("it works", () => {
  const result = decomposeIntoDictionaryWords(
    "amanaplanacanal",
    new Set(["a", "man", "plan", "canal"])
  );

  expect(result).toEqual(["a", "man", "a", "plan", "a", "canal"]);
});
