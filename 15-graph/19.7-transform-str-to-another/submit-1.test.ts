import { transformstring } from "./submit-1";

test("it works", () => {
  const result = transformstring(
    new Set(["bat", "cot", "dog", "dag", "dot", "cat"]),
    "cat",
    "dog"
  );
  expect(result).toEqual(3);
});
