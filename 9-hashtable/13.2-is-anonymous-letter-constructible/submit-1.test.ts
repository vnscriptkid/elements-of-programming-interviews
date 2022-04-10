import { isLetterConstructibleFromMagazine } from "./submit-1";

test("it works", () => {
  expect(isLetterConstructibleFromMagazine("aabc", "aabbcc")).toBe(true);
  expect(isLetterConstructibleFromMagazine("aabbbc", "aabbcc")).toBe(false);
});
